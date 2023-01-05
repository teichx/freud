import type { NextApiRequest, NextApiResponse } from "next";

type ErrorResponse = {
  error: string;
};

type SuccessResponse = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
  id_token: string;
};

type Data = ErrorResponse | SuccessResponse;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const code = typeof req.query.code === "string" ? req.query.code : "";
  if (!code) {
    return res.status(400).json({ error: "Invalid code" });
  }
  const client_id = process.env
    .NEXT_PUBLIC_GOOGLE_AUTHENTICATE_CLIENT_ID as string;
  const client_secret = process.env.GOOGLE_AUTHENTICATE_CLIENT_SECRET as string;
  const redirect_uri = process.env
    .NEXT_PUBLIC_GOOGLE_AUTHENTICATE_REDIRECT_URL as string;

  if ([client_id, client_secret, redirect_uri].some((x) => !x)) {
    return res.status(412).json({
      error: "Insufficient environment variables to process the request",
    });
  }

  const searchParams = new URLSearchParams({
    code,
    client_id,
    client_secret,
    grant_type: "authorization_code",
    redirect_uri,
  });

  try {
    const result = await fetch(
      `https://oauth2.googleapis.com/token?${searchParams}`,
      {
        method: "POST",
      }
    );
    const jsonResult: SuccessResponse = await result.json();
    res.status(200).json(jsonResult);
  } catch (error) {
    res.status(400).json({
      error: (error as Error).toString(),
    });
  }
}

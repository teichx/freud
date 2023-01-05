import { Link } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import { GoogleLoginProps } from "./types";

export const GoogleLogin: FC<GoogleLoginProps> = ({ scope = ["profile"] }) => {
  const getGoogleUrl = useMemo(() => {
    const searchParams = new URLSearchParams({
      redirect_uri:
        process.env.NEXT_PUBLIC_GOOGLE_AUTHENTICATE_REDIRECT_URL || "",
      client_id: process.env.NEXT_PUBLIC_GOOGLE_AUTHENTICATE_CLIENT_ID || "",
      access_type: "offline",
      scope: scope.join(" "),
      response_type: "code",
    });

    return `${
      process.env.NEXT_PUBLIC_GOOGLE_AUTHENTICATE_URL || ""
    }?${searchParams}`;
  }, []);

  return <Link href={getGoogleUrl}>Action</Link>;
};

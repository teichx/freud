import Router, { useRouter } from "next/router";
import { useEffect } from "react";

export default () => {
  const { query } = useRouter();

  useEffect(() => {
    const { code } = query;
    if (!code) return;

    fetch(`/api/authenticate?code=${code}`)
      .then(async (token) => {
        console.log({ token: await token.json() });
        Router.push("/dashboard");
      })
      .catch((err) => {
        console.log({ err });
      });
  }, [query]);

  return null;
};

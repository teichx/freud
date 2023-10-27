export type useAuthResultProps = {
  authenticateFetch: (
    input: RequestInfo | URL,
    init?: RequestInit
  ) => Promise<Response>;
};

export type useAuthProps = () => useAuthResultProps;

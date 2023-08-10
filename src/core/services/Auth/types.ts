export type useAuthResultProps = {
  authenticateFetch: typeof fetch;
};

export type useAuthProps = () => useAuthResultProps;

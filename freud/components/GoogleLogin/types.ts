export type GoogleLoginCallback = {
  clientId: string;
  client_id: string;
  credential: string;
  select_by: 'btn';
};

export type GoogleLoginProps = {
  handleLogin: (props: GoogleLoginCallback) => void;
};

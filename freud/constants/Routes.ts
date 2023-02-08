export const Routes = {
  ApiPrefix: '/api/',
  Core: {
    Login: '/core/login',
    Profile: {
      Default: '/core/profile',
    },
    Dashboard: {
      Default: '/core/dashboard',
    },
    Patient: {
      List: '/core/patient',
      Create: '/core/patient/create',
      Edit: '/core/patient/{0}',
    },
  },
} as const;

export const ApiRoutes = {
  Auth: {
    GetUrl: '/api/auth/get-url',
    Logout: '/api/auth/logout',
    Token: '/api/auth/token',
  },
} as const;

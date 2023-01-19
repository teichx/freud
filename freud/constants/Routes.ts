export const Routes = {
  ApiPrefix: '/api/',
  App: {
    Login: '/app/login',
    Profile: {
      Default: '/app/profile',
    },
    Dashboard: {
      Default: '/app/dashboard',
    },
    Patient: {
      List: '/app/patient',
      Create: '/app/patient/create',
      Edit: '/app/patient/{0}',
    },
  },
} as const;

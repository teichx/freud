export const Routes = {
  ApiPrefix: '/api/',
  Core: {
    Login: '/core/login',
    Authenticated: '/core/authenticated',
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
      CaseReport: {
        List: '/core/patient/{0}/case-report',
      },
    },
  },
} as const;

export const ApiRoutes = {
  Auth: {
    GetUrl: '/api/auth/get-url',
    Logout: '/api/auth/logout',
    Token: '/api/auth/token',
    RefreshToken: '/api/auth/refresh-token',
  },
  Patient: {
    Get: '/api/patient/{0}',
    List: '/api/patient/list?page={0}&limit={1}',
    Upsert: '/api/patient/upsert',
    CaseReport: {
      Get: '/api/patient/{0}/case-report/{1}',
      List: '/api/patient/{0}/case-report/list?page={1}&limit={2}',
      Upsert: '/api/patient/{0}/case-report/upsert',
    },
  },
} as const;

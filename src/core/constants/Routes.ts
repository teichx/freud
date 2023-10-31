export const ProjectRoutes = {
  Home: '/',
  Policies: '/policies',
} as const;

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
    Login: '/api/auth/signin/google',
  },
  Patient: {
    Get: '/api/patient/{0}',
    Archive: '/api/patient/{0}/archive',
    Unarchive: '/api/patient/{0}/unarchive',
    List: '/api/patient/list?{0}',
    Upsert: '/api/patient/upsert',
    CaseReport: {
      Get: '/api/patient/{0}/case-report/{1}',
      List: '/api/patient/{0}/case-report/list?page={1}&limit={2}',
      Upsert: '/api/patient/{0}/case-report/upsert',
    },
  },
} as const;

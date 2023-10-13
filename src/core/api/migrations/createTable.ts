export const createTable = async () =>
  await fetch(process.env.NEXTAUTH_URL + '/api/auto/create-table', {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: process.env.ADMIN_AUTH_BASIC || '',
    },
  });

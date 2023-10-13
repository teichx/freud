import { createTable } from './core/api/migrations/createTable';

export const register = async () => {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await createTable();
  }
};

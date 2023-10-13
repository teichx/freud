import { runAll } from './core/api/migrations';

export const register = async () => {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await runAll();
  }
};

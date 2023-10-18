import { runAll } from './core/api/migrations';

export const register = async () => {
  if (process.env.NODE_ENV !== 'development') return;

  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await runAll();
  }
};

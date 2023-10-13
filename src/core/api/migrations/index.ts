import { createTable } from './createTable';

const allMigrations = [createTable];

export const runAll = async () => {
  allMigrations.forEach(async (migration) => {
    try {
      await migration();
    } catch (error) {
      console.log('Error on run migration', {
        name: migration.name,
        error: `${error}`,
      });
      return;
    }
  });
};

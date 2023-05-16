import { env } from 'process';
import { Sequelize } from 'sequelize-typescript';
import mysql2 from 'mysql2';
import { Token } from './models/Token';

const SHARED_DB_OPTIONS = {
  dialect: 'mysql' as const,
  dialectModule: mysql2, // gets around a Vercel bug where it's missing on edge functions
};

const DB_OPTIONS = {
  development: SHARED_DB_OPTIONS,
  test: SHARED_DB_OPTIONS,
  production: {
    ...SHARED_DB_OPTIONS,
    ssl: true,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  },
}[env.NODE_ENV || 'development'];

const databaseUrl = env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL environment variable not set');
}

export const db = {
  Token,
} as const;

export const dbClient = new Sequelize(databaseUrl, {
  models: Object.values(db),
  define: {
    freezeTableName: true,
  },
  ...DB_OPTIONS,
});

(() => dbClient.authenticate())();

export default {
  host: process.env.DATABASE_HOST,
  type: 'postgres',
  password: process.env.DATABASE_PASSWORD,
  username: process.env.DATABASE_USER,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
};

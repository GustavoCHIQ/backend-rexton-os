import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

const USER = process.env['DB_USER']
const HOST = process.env['DB_HOST']
const NAME = process.env['DB_NAME']
const PASS = process.env['DB_PASS']

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: HOST,
  port: 5432,
  username: USER,
  password: PASS,
  database: NAME,
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
})

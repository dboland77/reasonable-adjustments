import  pg from "pg"
import dotenv from "dotenv"
dotenv.config();

const {Pool} = pg

const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

export const pool = new Pool({
connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
ssl: isProduction
})

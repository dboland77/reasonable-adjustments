import pg from "pg"

const dbConfig = {
    HOST: "localhost",
    USER: "daveboland",
    PASSWORD: "postgres",
    DB: "postgres",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };


const pool = new pg.Pool(dbConfig)


export default pool;
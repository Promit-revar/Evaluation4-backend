module.exports ={
  development: {
    "username": process.env.BACKEND_DB_USERNAME,
    "password": process.env.BACKEND_DB_PASSWORD,
    "database": process.env.BACKEND_DATABASE,
    "host": process.env.BACKEND_HOST,     
    "dialect": "postgres"
  },
  test: {
    "username": process.env.BACKEND_DB_USERNAME,
    "password": process.env.BACKEND_DB_PASSWORD,
    "database": process.env.BACKEND_DATABASE,
    "host": process.env.BACKEND_HOST,     
    "dialect": "postgres"
  },
  docker:{
    "username": process.env.DB_BACKEND_USER,
    "password": process.env.DB_BACKEND_PASSWORD,
    "database": process.env.DB_BACKEND_NAME,
    "host": process.env.DB_BACKEND_HOST,
    "port": process.env.DB_BACKEND_PORT,
    "dialect": "postgres"
  }
}

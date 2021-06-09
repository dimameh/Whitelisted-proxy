export default {
  LOG_FILE_DIR: './log',
  LOG_FILE_NAME: 'app.log',
  PORT: process.env.PORT || 3000,
  WHITELIST: process.env.WHITELIST ||'./whitelist.json',
  SECRET_KEY: process.env.SECRET_KEY || 'secret key weasgfhgfd'
}
// eslint-disable-next-line no-unused-vars
import * as fs from 'fs'
import config from './config'
import * as winston from 'winston'
import * as rotate from 'winston-daily-rotate-file'
const { combine, timestamp, label, printf } = winston.format

const dir = config.LOG_FILE_DIR

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}
const myFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`
})

const logger = new winston.createLogger({
  format: combine(
        winston.format.json(),
        timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        myFormat
      ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({
          level: true
        }),
      )
    }),
    new winston.transports.DailyRotateFile({
      filename: config.LOG_FILE_NAME,
      dirname: config.LOG_FILE_DIR,
      maxsize: 20971520, // 20MB
      maxFiles: 25,
      datePattern: '.dd-MM-yyyy',
    }),
  ],
})

export default logger

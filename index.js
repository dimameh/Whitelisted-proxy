import logger from './core/logger'
import config from './core/config'
import app from './app'

app.listen(config.PORT, () => logger.info(`Server is listening on port ${ config.PORT }`))
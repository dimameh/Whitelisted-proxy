import crypto from 'crypto-js'
import config from '../core/config'

const hasher = {}

hasher.getTokenByLoginAndPassword = (login, password) => {
  return crypto.HmacSHA3(JSON.stringify([login, config.SECRET_KEY, password]), config.SECRET_KEY).toString()
}

export default hasher
import crypto from 'crypto-js'
import config from '../core/config'

const hasher = {}

hasher.getTokenByLoginAndPassword = (login, password) => {
  return crypto.AES.encrypt(login + password, config.SECRET_KEY).toString()
}

export default hasher
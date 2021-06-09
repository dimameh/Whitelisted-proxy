import crypto from 'crypto-js'

const hasher = {}

hasher.getTokenByLoginAndPassword = (login, password) => {
  return crypto.MD5(password + login).toString()
}

export default hasher
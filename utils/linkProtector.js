import { readJSON } from 'json-reader-writer'
import config from '../core/config'

export default function protectedLink(req, res, next) {
  try {
    if (isTokenWhiteListed(req.token)) {
      next()
    } else {
      res.json({ status: 'error', message: 'Wrong token or it have no rights' })
    }
  } catch(err) {
    console.log("Error in token check")
    console.log(err)
    if (err) {
      res.status(401).json({ status: 'error', message: err.errorInfo.code })
    }
  }
}

function isTokenWhiteListed(token) {
  const allowedTokensArr = readJSON(config.WHITELIST)
  
  if (allowedTokensArr.indexOf(token) === -1)  {
    return false
  } else {
    return true
  }
}
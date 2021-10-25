//utils/auth.js
import axios from 'axios'

export function setHeaderToken (access_token) { 
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token
}

export function removeHeaderToken () {
  delete axios.defaults.headers.common['Authorization']
}

import axios from "axios";

axios.defaults.withCredentials=false

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/api'
  })

  instance.interceptors.request.use(success => {
    return success
  }, err => {
    console.log(err)
  })
  instance.interceptors.response.use(result => {
    return result
  }, err => {
    console.log(err)
  })
  return instance(config)
}

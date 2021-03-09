import axios from "axios";

export function request(config) {
  const instance = axios.create({

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

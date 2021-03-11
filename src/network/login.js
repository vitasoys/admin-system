import {request} from "./request";

export function LoginData(username,password) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      "username": username,
      "password": password
    },
    headers:{
      'Content-type': 'application/json'
    }
  })
}


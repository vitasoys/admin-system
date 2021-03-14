import {request} from "./request";

export function UserInfo(page,pagenum) {
  return request({
    url: '/users',
    method: 'get',
    params: {
      page,
      pagenum
    },
  })
}

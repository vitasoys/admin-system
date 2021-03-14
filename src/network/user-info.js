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

export function UserSearchId(id) {
  return request({
    url: '/searchId',
    method: 'get',
    params: {
      id
    }
  })
}

export function UserSearchName(name) {
  return request({
    url: '/searchName',
    method: 'get',
    params: {
      name
    }
  })
}

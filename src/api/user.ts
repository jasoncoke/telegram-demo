import apiAxios from "@/utils/request"

export function asyncUserAvatar() {
  return apiAxios({
    url: "/api/user/avatar/sync",
    method: "post",
  })
}


export function getUserInfo() {
  return apiAxios({
    url: "/api/user/info",
    method: "post",
  })
}

import apiAxios from "@/utils/request"

export function earnGold() {
  return apiAxios({
    url: "/api/game/earn",
    method: "post",
  })
}

export function getRankList() {
  return apiAxios({
    url: "/api/game/rank",
    method: "post",
  }, false)
}

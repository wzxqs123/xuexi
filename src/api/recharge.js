import request from "@/axios/index";

export function userSign(id) {
  return request({
    url: "/fuyouindexpay/getuser",
    method: "post",
    data: id
  });
}

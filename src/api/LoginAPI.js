import axiosIns from 'utils/axiosIns.js';

export function getLoginStatus(params) {
  return axiosIns.get("/getloginstatus.json");
}

import $ from "jquery";

export default {
  // 新增報修 初始資料
  // 送出報修單
  store: (data) => {
    return useHttp.post("/v1/file/store", data);
  },
};

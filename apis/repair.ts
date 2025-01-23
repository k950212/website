import $ from "jquery";

export default {
  // 新增報修 初始資料
  create: () => {
    return useHttp.get("/v1/repair/show/0");
  },
  show: (repairNo) => {
    return useHttp.get("/v1/repair/show/" + repairNo);
  },
  // 送出報修單
  store: (data) => {
    return useHttp.post("/v1/repair/store", data);
  },
  // 更新報修單
  update: (data) => {
    return useHttp.post("/v1/repair/update", data);
  },
  index: (params) => {
    var reqString = $.param(params);
    var url = "/v1/repair/index?" + reqString;
    return useHttp.get(url);
  },
  question: (data) => {
    return useHttp.post("/v1/repair-contact/store", data);
  },
  questionList: (params) => {
    var reqString = $.param(params);
    var url = "/v1/repair-contact/index?" + reqString;
    return useHttp.get(url);
  },
};

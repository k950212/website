export default {
  // 送出寄送資訊
  store: (data) => {
    return useHttp.post("/v1/repair-ship-info/store", data);
  },
};

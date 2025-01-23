export default {
  login: (data) => {
    return useHttp.post("/v1/member/login", data);
  },
  logout: () => {
    return useHttp.get("/v1/member/logout");
  },
  register: (data) => {
    return useHttp.post("/v1/member/register", data);
  },
  // 再次寄送驗證碼
  code: (member_id: any) => {
    const data = {
      member_id: member_id,
    };
    return useHttp.post("/v1/member/code", data);
  },
  // 驗證帳號
  check: (data: any) => {
    return useHttp.post("/v1/member/check", data);
  },
  // 忘記密碼
  forgot: (account: any) => {
    const data = {
      account: account,
    };
    return useHttp.post("/v1/member/forgot", data);
  },
  // 會員資訊
  info: () => {
    return useHttp.get("/v1/member/info");
  },
  // 更新會員資訊
  update: (data: any) => {
    return useHttp.post("/v1/member/update", data);
  },
};

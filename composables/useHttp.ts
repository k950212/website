import type { FetchResponse, SearchParameters } from "ofetch";

export interface ResOptions<T> {
  data: T;
  code: number;
  message: string;
  success: boolean;
}

const handleError = <T>(response: FetchResponse<ResOptions<T>> & FetchResponse<ResponseType>) => {
  const err = (text: string) => {
    console.log(text);
  };
  if (!response._data) {
    err("请求超时，服务器无响应！");
    return;
  }
  const handleMap: { [key: number]: () => void } = {
    404: () => err("服务器资源不存在"),
    500: () => err("服务器内部错误"),
    403: () => err("没有权限访问该资源"),
    401: () => {
      err("登录状态已过期，需要重新登录");
      // TODO 跳转实际登录页
      navigateTo("/");
    },
  };
  handleMap[response.status] ? handleMap[response.status]() : err("未知错误！");
};

// get方法传递数组形式参数
const paramsSerializer = (params?: SearchParameters) => {
  if (!params) return;

  const query = useCloneDeep(params);
  Object.entries(query).forEach(([key, val]) => {
    if (typeof val === "object" && Array.isArray(val) && val !== null) {
      query[`${key}[]`] = toRaw(val).map((v: any) => JSON.stringify(v));
      delete query[key];
    }
  });
  return query;
};

const fetch = $fetch.create({
  // 请求拦截器
  onRequest({ options }) {
    // get方法传递数组形式参数
    options.params = paramsSerializer(options.params);
    // 添加baseURL,nuxt3环境变量要从useRuntimeConfig里面取
    const {
      public: { apiBase },
    } = useRuntimeConfig();
    options.baseURL = apiBase;
    // 添加请求头,没登录不携带token

    // const userStore = useUserStore()
    // if (!userStore.isLogin) return
    options.headers = new Headers();
    options.headers.set("apikey", "09590fc741424fbb96fb7bb37e0ff891");
    options.headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
  },
  // 响应拦截
  onResponse({ response }) {
    if (response.status === 200) {
      if (response._data.code == 401) {
        navigateTo("/");
      }
      return response._data;
    } else {
      // 在这里判断错误
      // ElMessage({
      //   message: h("p", { style: "line-height: 1; font-size: 14px" }, [h("span", null, response._data.message)]),
      // });
      return response._data;
    }
    // 成功返回
    // return response._data
  },
  // 错误处理
  onResponseError({ response }) {
    //handleError(response)
    // alert(response._data.message)
    return Promise.reject(response?._data ?? null);
  },
});

// 自动导出
export const useHttp = {
  get: <T>(url: string, params?: any) => {
    return fetch<T>(url, { method: "get", params, credentials: "include" });
  },

  post: <T>(url: string, body?: any) => {
    return fetch<T>(url, { method: "post", body, credentials: "include" });
  },

  put: <T>(url: string, body?: any) => {
    return fetch<T>(url, { method: "put", body, credentials: "include" });
  },

  delete: <T>(url: string, body?: any) => {
    return fetch<T>(url, { method: "delete", body, credentials: "include" });
  },
};

import Vue from "vue";
import axios from "axios";

Vue.prototype.$axios = axios;

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000, // 请求超时
  withCredentials: true // 允许携带cookie
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做点什么
    console.log(config);
    return config;
  },
  error => {
    // 处理请求错误
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 响应拦截器
// service.interceptors.response.use(
//   /**
//    * 如果要获取HTTP信息，如头或状态
//    * Please return  response => response
//    */

//   /**
//    * 通过自定义代码确定请求状态
//    * 这只是一个例子
//    * 您还可以通过HTTP状态代码判断状态
//    */
//   response => {
//     console.log(response);
//     const res = response.data;
//     // 如果自定义代码不是20000，则判断为错误。
//     if (res.code !== 20000) {
//       console.log(res.message);

//       // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
//       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//         // to re-login
//         console.log(res);
//       }
//       return Promise.reject(res.message || "error");
//     } else {
//       return res;
//     }
//   },
//   error => {
//     console.log("err" + error); // for debug
//     return Promise.reject(error);
//   }
// );

export default service;

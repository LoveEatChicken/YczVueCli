/**
 * Created by Crystal on 2017/8/17.
 */
import axios from 'axios'
//apis
const apiList = {
  login: '/server/xxxx/web/account/login',
  getSecurityCode: '/server/xxxx/web/account/get_code'
};

//axiosConfig
axios.defaults.baseURL = process.env.API_HOST.toString();

//添加请求拦截器
axios.interceptors.request.use(function (config) {
  //在发送请求之前做某事
  return config;
}, function (error) {
  //请求错误时做些事
  return Promise.reject(error);
});

//添加响应拦截器
axios.interceptors.response.use(
  config => {
    //对响应数据做些事
    return config;
  },
  error => {
    //请求错误时做些事
    //可以在此处做错误码的统一处理，登出账号等
    return Promise.reject(error);
  });


export default {
  install(Vue) {
    Vue.prototype.fechRequest = function (requests, parameters, successCallBack, failCallBack) {
      console.log('list', apiList);
      console.log('ttyype', requests instanceof Array);
      if (requests instanceof Array && requests.length > 1) {
        let allRequest = [];
        for (let request of requests) {
          allRequest.push(axios.post(apiList[Object.keys(request)[0]], Object.values(request)[0]))
        }
        console.log('allRequest', allRequest);
        axios.all(allRequest).then((function (response) {
          // Both requests are now complete
          successCallBack(response);
        })).catch(function (error) {
            failCallBack(error);
          }
        );
      } else {
        if (requests instanceof Array) {
          requests = requests[0];
        }
        axios.post(apiList[Object.keys(requests)[0]], Object.values(requests)[0]).then(function (response) {
          successCallBack(response);
        }).catch(function (error) {
          failCallBack(error);
        })
      }
    }
  }
}





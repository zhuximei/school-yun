// axios请求函数模块
import axios from 'axios'
import qs from 'qs'
// import {Loading, Message} from 'element-ui'

//初始化
let loading;

//开始动画
function startLoading (){
  loading = Loading.service({
      lock:true,
      text:"正在努力的加载中"
  })
}

//结束动画
function closeLoading (){
  loading.close();
}

var reType=1
//全局axios默认值
// let requireUrl = sessionStorage.getItem('url')?sessionStorage.getItem('url').replace('\'','').replace('\'',''):'';
axios.defaults.baseURL = process.env.BASE_URL;//配置个地址以后只需传入地址后缀
//拦截器
// 请求拦截
axios.interceptors.request.use(config=> {
  if(reType==1){
    config.headers={
      'Content-Type':'application/json',
    }
  }else{
    config.headers={
      'Content-Type':'application/x-www-form-urlencoded'
    }
  }
  config.headers.Authorization =localStorage.getItem('token')?'Bearer '+localStorage.getItem('token'):'';
  //判断当前请求是否设置了不显示Loading
  startLoading();
  return config;
},error=> {
  closeLoading();
  Message.error('请求超时!');
  return Promise.reject(error);
});

// 响应拦截
axios.interceptors.response.use(response=> {
  closeLoading();
  if(response.data.status=="401"){
    localStorage.removeItem('token');     //删除用户登录验证的key值，即token值
    router.replace({
      path: '/'
    })
  }
  return response;
},error=>{
  closeLoading();
  return Promise.reject(error);
});

//封装get请求和post请求
export default {
  post(url,data={},type){
      reType = type || 1
    return new Promise((resolve,reject)=>{
      if(reType==1){
        axios.post(url,data)
        .then(response => {
          resolve(response.data)  
        },err=>{
          reject(err)
        })
      }else{
        axios.post(url,qs.stringify(data))
        .then(response => {
          resolve(response.data)
        },err=>{
          reject(err)
        })
      }
    
    })
  },
  get(url,params={}){
    return new Promise((resolve,reject)=>{
      axios.get(url,{
        params:params
      })
      .then(response=>{
        resolve(response.data)
      })
      .catch(err=>{
        reject(err)
      })
    })
  }
}

// 封装put请求和delete请求

// export default axios;
/**
 * Created by asus-z on 2018/11/1.
 */
//封装axios的ajax模块  返回值是promise对象

import axios from 'axios'
// import {stringify} from 'qs'
export default function ajax(url,data,type='GET') {
  
  let querystring = '';
  if(data){
    Object.keys(data).forEach(key=>{
      const value = data[key];
      querystring += key + '=' + value + '&'
    })
    querystring = querystring.substring(0,querystring.length-1)
    console.log(querystring);
    
  }
  if(type.toUpperCase() ==='GET'){
  //  get请求
    url +='?'+querystring;
    return axios.get(url);
  }else {
  //  post请求
    return axios.post(url,querystring,{
      headers:{
        'Content-Type':'application/x-www-from-urlencoded'
      }
    })
  }
}


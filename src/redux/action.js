/**
 * Created by asus-z on 2018/10/31.
 * 创建action
 */

import {reqLogin,reqRegister} from '../api'
import {ERR_MSG,AUTH_SUCCESS} from './action-types'


//同步action  注册成功
export const authSuccess = user =>({type:AUTH_SUCCESS,data: user})

//同步action  注册失败
export const errMsg = msg =>({type:ERR_MSG,data:msg})

//注册异步的action
export const register = data=>{
  //表单验证
  const {username,password,rePassword,type} = data;
  
  if(!username){
    return errMsg({username,password,msg:'请输入用户名'})
  }else if(!password){
    return errMsg({username,password,msg:'请输入密码'})
  }else if(password !== rePassword){
    return errMsg({username,password,msg:'两次密码输入不一致'})
  }else if(!type){
    return errMsg({username,password,msg:'请选择账号类型'})
  }
  
  return dispatch=>{
    //发送ajax请求
    reqRegister(data)
      .then(res=>{
        const result = res.data;
        if(result.code ===0){
        //  注册成功
          dispatch(authSuccess(result.data))
        }else {
          console.log(result.msg);
          dispatch(errMsg({msg:result.msg,username:data.username,type:data.type}))
        }
      })
      .catch(err=>{
        dispatch(errMsg({msg:'网不行',username:data.username,type:data.type}))
      })
  }
}
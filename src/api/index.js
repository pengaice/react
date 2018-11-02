/**
 * Created by asus-z on 2018/11/1.
 */
//发送请求
import ajax from './ajax'
//请求登陆
export const reqLogin=data=>ajax('/login','data','POST')

//请求注册
export const reqRegister=data=>ajax('/register','data','POST')
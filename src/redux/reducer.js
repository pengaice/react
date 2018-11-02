/**
 * Created by asus-z on 2018/10/31.
 */
import {combineReducers} from 'redux'
import {ERR_MSG,AUTH_SUCCESS} from './action-types'

const initUserState = {
  username:'',
  type:'',
  msg:''
}

function user(preState = initUserState,action) {
  switch (action.type){
    case AUTH_SUCCESS:
      return{username:action.data.username,type:action.data.type,msg:''}
    case ERR_MSG:
      return{...action.data}
      default:
      return preState;
  }
}

//合并多个reducers函数
export default combineReducers({
 user
})
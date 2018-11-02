/**
 * Created by asus-z on 2018/11/2.
 */
//容器组件

import {connect} from 'react-redux'

import Register from '../components/register'
import {register} from '../redux/action'

export default connect(
  state=>({user:state.user}),
  {register}
)(Register)
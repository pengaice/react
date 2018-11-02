import React, {Component} from 'react';
import { NavBar,List, InputItem, Button,WingBlank, WhiteSpace} from 'antd-mobile';
import Logo from '../logo'
class Register extends Component {
  
  state = {
    username:'',
    password:''
  }
  handleChange = (name,val)=>{
    this.setState({
      [name]:val
    })
  }
  
  register=()=>{
    const {username,password,rePassword} = this.state;
    console.log(username,password,rePassword);
  }
  goRegister=()=>{
    this.props.history.replace('/register');
  }
  render () {
    return (
      <div>
        <div>
          <NavBar>硅 谷 直 聘</NavBar>
          <Logo />
          <WingBlank>
            <form>
              <List>
                <WhiteSpace />
                <InputItem placeholder="请输入用户名"
                           onChange={val =>this.handleChange('username',val)}>用户名</InputItem>
                <WhiteSpace />
                <InputItem placeholder="请输入密码"
                           type = "password"
                           onChange={val =>this.handleChange('password',val)}>密码</InputItem>
                <WhiteSpace />
                <Button type="primary" onClick={this.register}>登陆</Button>
                <Button onClick={this.goRegister}>还没有账户</Button>
              </List>
            </form>)
          </WingBlank>
        </div>
      </div>
    )
  }
}
export default Register
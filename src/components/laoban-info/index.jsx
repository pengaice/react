import React, {Component} from 'react';

import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile'
import HeaderSelector from '../header-selector'
class LaobanInfo extends Component {
  
  state = {
    header: '',
    info: '',
    post: '',
    salary: '',
    company: ''
  }
  handleChange = (name,val)=>{
    this.setState({
      [name]:val
    })
  }
  setHeader = header =>{
    this.setState({
      header
    })
  }
  render () {
    return (
      <div>
        <NavBar>老板信息完善</NavBar>
        <HeaderSelector setHeader = {this.setHeader}/>
        <InputItem onChange ={val=>this.handleChange('post,val')}>招聘职位:</InputItem>
        <InputItem onChange ={val=>this.handleChange('company,val')}>公司名称:</InputItem>
        <InputItem onChange ={val=>this.handleChange('salary,val')}>职位薪资:</InputItem>
        <TextareaItem title="职位要求" rows={3} onchange = {val=>this.handleChange('info',val)}/>
        <Button type="primary">保存</Button>
      </div>
    )
  }
}
export default LaobanInfo;
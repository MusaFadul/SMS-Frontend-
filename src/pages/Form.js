
import React, { Component } from "react";
import {Form, Input, Icon, Select,  Button, AutoComplete, message} from 'antd';
import { connect } from 'react-redux'
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    color:'',
    autoCompleteResult: [],
    userCredentials:''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(this.callback);
  };

  callback = (err, values) => {
      if (!err) {
          this.props.onRegister(values)
          message.success('User is registerd successfully', 6);
      }
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords do not match!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
   
    return (
      <div style={{width:"50%", height:"35%",marginLeft:"24%", marginTop:"9%", marginBottom:"12%"}}>
        <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{marginLeft:"150px"}}>
          <Form.Item >
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email"/> )}
          </Form.Item>
          <Form.Item  hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  min:8,
                  message: 'Please input password at least 8 characters !',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Passowrd"/>)}
          </Form.Item>
          <Form.Item  hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur}  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Confirm Passowrd"/>)}
          </Form.Item>
          <Form.Item  >
            <Button type="primary" htmlType="submit" onMouseEnter = {()=>this.setState({color:"red"})} onMouseLeave = {()=>this.setState({color:""})} style= {{width:"285px",backgroundColor:this.state.color}}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      userIcon : state.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onRegister : (values) => dispatch({type: 'REGISTRATIONED', userCredentials : values}),
  };
};

const RegForm = Form.create({ name: 'register' })(RegistrationForm);

export default  connect(mapStateToProps, mapDispatchToProps)( RegForm) ;
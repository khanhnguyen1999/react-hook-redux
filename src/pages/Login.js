import React,{useEffect} from 'react';
// import Button from 'antd/es/button'
import {actLogin} from '../store/user/actions'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, Button, Checkbox } from 'antd';

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector(state=>state)
    const token = useSelector(state=>state.User.token)
    useEffect(()=>{
        if(token){
            console.log("đã đăng nhập")
            history.push("/")
        }
        else{
            console.log("chưa đăng nhập")
        }
        console.log("state: ",state)
    },[token,history])
    console.log(token)
    const onFinish1 = (v)=>{
        dispatch(actLogin(v))
    }
    return (
        <div className="container">
                <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish1}
            >
            <Form.Item
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your Username!',
                },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
                ]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
                </Button>
                Or <a href="">register now!</a>
            </Form.Item>
            </Form>
            </div>
    );
}

export default Login;

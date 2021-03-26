import React from 'react';
import { Typography, Button, Form, Input, Divider } from 'antd';

import MainContainer from '../main-container/main-container.component';

import { ReactComponent as GoogleLogo } from '../../assets/google-logo.svg';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './sign-in.styles.scss';

const SignIn = () => (
  <div>
    <MainContainer className='main-container'>
      <div className='sign-in-text'>
        <Typography.Title className='title-text'>
          Please Sign in to Continue
        </Typography.Title>
        <Typography className='subtitle-text' type={'secondary'}>
          Signing in is necessary for us to keep track of your debts. If you
          don't have an account, register now and manage those debts, it's free!
        </Typography>
      </div>
      <div className='form'>
        <Form name='login' className='login-form'>
          <Form.Item
            name='email'
            rules={[
              {
                required: true,
                message: 'Please enter your email address',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder='Email Address' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Please enter your password',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>
        </Form>
      </div>
      <div className='button-bar'>
        <div className='register-container'>
          <Button block='true'>Register</Button>
        </div>
        <Divider
          type='vertical'
          style={{ borderWidth: 2, borderColor: '#060072', height: 90 }}
        />
        <div className='sign-in-container'>
          <Button block='true' type='primary'>
            Sign in
          </Button>
          <Button block='true' icon={<GoogleLogo className='google-logo' />}>
            Sign in with Google
          </Button>
        </div>
      </div>
    </MainContainer>
  </div>
);

export default SignIn;

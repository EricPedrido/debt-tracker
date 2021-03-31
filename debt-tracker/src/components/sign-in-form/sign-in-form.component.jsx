import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import SignInButtonBar from "../sign-in-button-bar/sign-in-button-bar.component";

import { emailSignInStart, signUpStart } from "../../redux/user/user.action";
import { selectRegisterPressed } from "../../redux/user/user.selectors";

import "./sign-in-form.styles.scss";

// TODO allow for sign in USING REDUX SAGA

const SignInForm = ({ emailSignInStart, registerPressed, signUpStart }) => {
  const onFinish = (values) => {
    if (registerPressed) {
      signUpStart(values);
    } else {
      emailSignInStart(values);
    }
  };

  return (
    <div className='form'>
      <Form name='login' className='login-form' onFinish={onFinish}>
        <Form.Item
          name='email'
          rules={[
            {
              required: true,
              message: "Please enter your email address",
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
              message: "Please enter your password",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        {registerPressed && (
          <Form.Item
            name='confirmPassword'
            rules={[
              {
                required: registerPressed,
                message: "Please confirm your password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error("Passwords do not match"));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type='password'
              placeholder="Confirm Password"
            />
          </Form.Item>
        )}
        <Form.Item>
          {registerPressed ? (
            <SignInButtonBar
              leftButtonText='Cancel'
              rightButtonText='Confirm'
            />
          ) : (
            <SignInButtonBar
              leftButtonText='Register'
              rightButtonText='Sign in'
            />
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  registerPressed: selectRegisterPressed,
});

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (userCredentials) =>
    dispatch(emailSignInStart(userCredentials)),
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);

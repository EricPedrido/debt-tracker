import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import SignInButtonBar from "../sign-in-button-bar/sign-in-button-bar.component";

import { emailSignInStart, signUpStart } from "../../redux/user/user.action";
import { selectRegisterPressed } from "../../redux/user/user.selectors";

import "./sign-in-form.styles.scss";

// TODO allow for sign in USING REDUX SAGA

var PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const SignInForm = ({ emailSignInStart, registerPressed, signUpStart }) => {
  const formRef = React.createRef();

  useEffect(() => {
    if (formRef) {
      formRef.current.resetFields();
    }
  }, [registerPressed]);

  const onFinish = (values) => {
    if (registerPressed) {
      signUpStart(values);
    } else {
      emailSignInStart(values);
    }
  };

  return (
    <div className='form'>
      <Form
        name='login'
        className='login-form'
        onFinish={onFinish}
        ref={formRef}
      >
        <Form.Item
          name='email'
          rules={[
            {
              type: "email",
              message: "Please enter a valid email address",
            },
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
              message: "Please enter password",
            },
            () => ({
              validator(_, value) {
                if (!registerPressed || !value || PASSWORD_REGEX.test(value)) {
                  return Promise.resolve();
                }
                if (registerPressed) {
                  return Promise.reject(
                    new Error(
                      'Password must have minimum 8 characters, an uppercase, a number, and a special character such as "@ $ ! % * ? &"'
                    )
                  );
                }
              },
            }),
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
              placeholder='Confirm Password'
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

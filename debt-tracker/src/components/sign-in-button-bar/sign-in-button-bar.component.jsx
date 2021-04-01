import React, { useState } from "react";
import { connect } from "react-redux";

import { Button, Divider } from "antd";

import { ReactComponent as GoogleLogo } from "../../assets/google-logo.svg";
import { ReactComponent as FacebookLogo } from "../../assets/facebook-logo.svg";

import { pressRegister, signUpStart } from "../../redux/user/user.action";

import "./sign-in-button-bar.styles.scss";

const SignInButtonBar = ({
  pressRegister,
  leftButtonText,
  rightButtonText,
  onFinish,
}) => {
  return (
    <div className='button-bar'>
      <div className='left-container'>
        <Button onClick={pressRegister} block='true'>
          {leftButtonText}
        </Button>
      </div>
      <Divider
        type='vertical'
        style={{ borderWidth: 1, borderColor: "#060072", height: 90 }}
      />
      <div className='right-container'>
        <Button
          block='true'
          type='primary'
          htmlType='submit'
          onClick={onFinish}
        >
          {rightButtonText}
        </Button>
        <div className='alt-button-container'>
          <Button block='true' icon={<GoogleLogo className='logo' />} />
          <Button block='true' icon={<FacebookLogo className='logo' />} />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  pressRegister: () => dispatch(pressRegister()),
});

export default connect(null, mapDispatchToProps)(SignInButtonBar);

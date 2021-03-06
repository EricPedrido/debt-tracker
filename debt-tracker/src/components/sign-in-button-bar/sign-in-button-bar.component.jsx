import React from "react";

import { Button, Divider } from "antd";

import { ReactComponent as GoogleLogo } from "../../assets/google-logo.svg";
import { ReactComponent as FacebookLogo } from "../../assets/facebook-logo.svg";

import "./sign-in-button-bar.styles.scss";

const SignInButtonBar = ({
  leftButtonText,
  rightButtonText,
  rightOnClick,
  leftOnClick,
}) => {
  return (
    <div className='button-bar'>
      <div className='left-container'>
        <Button onClick={leftOnClick} block='true'>
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
          onClick={rightOnClick}
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

export default SignInButtonBar;

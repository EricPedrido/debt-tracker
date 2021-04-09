import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Typography } from "antd";

import SignInForm from "../sign-in-form/sign-in-form.component";

import {
  selectRegisterPressed,
  selectSignInSignUpError,
} from "../../redux/user/user.selectors";

import "./sign-in.styles.scss";

const REGISTER_TEXT = "Register Here";
const REGISTER_SUBTEXT = "A verification code will be sent to your email";

const SIGN_IN_TEXT = "Please Sign in to Continue";
const SIGN_IN_SUBTEXT =
  "Signing in is necessary for us to keep track of your debts. If you don't have an account, register now and manage those debts, it's free!";

const SignIn = ({ registerPressed, signInSignUpError }) => {
  const titleText = () => {
    if (registerPressed) {
      return REGISTER_TEXT;
    } else {
      return SIGN_IN_TEXT;
    }
  };

  const subText = () => {
    if (registerPressed) {
      return REGISTER_SUBTEXT;
    } else {
      return SIGN_IN_SUBTEXT;
    }
  };

  return (
    <div>
      <div className='sign-in-text'>
        <Typography.Title className='title-text'>
          {titleText()}
        </Typography.Title>
        <Typography.Text className='subtitle-text'>{subText()}</Typography.Text>
      </div>
      {signInSignUpError && (
        <Typography.Text className='sign-in-error' type={"danger"}>
          {signInSignUpError.message}
        </Typography.Text>
      )}
      <SignInForm />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  registerPressed: selectRegisterPressed,
  signInSignUpError: selectSignInSignUpError,
});

export default connect(mapStateToProps)(SignIn);

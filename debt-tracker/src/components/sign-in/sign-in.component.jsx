import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Typography } from "antd";

import MainContainer from "../main-container/main-container.component";
import SignInForm from "../sign-in-form/sign-in-form.component";

import {
  selectRegisterPressed,
  selectSignInSignUpError,
} from "../../redux/user/user.selectors";

import "./sign-in.styles.scss";

const SignIn = ({ registerPressed, signInSignUpError }) => {
  return (
    <div>
      <MainContainer className='main-container'>
        {registerPressed ? (
          <div className='sign-in-text'>
            <Typography.Title className='title-text'>
              Register Here
            </Typography.Title>
          </div>
        ) : (
          <div className='sign-in-text'>
            <Typography.Title className='title-text'>
              Please Sign in to Continue
            </Typography.Title>
            <Typography.Text className='subtitle-text'>
              Signing in is necessary for us to keep track of your debts. If you
              don't have an account, register now and manage those debts, it's
              free!
            </Typography.Text>
            {signInSignUpError && (
              <Typography.Text className='sign-in-error' type={"danger"}>
                {signInSignUpError.message}
              </Typography.Text>
            )}
          </div>
        )}
        <SignInForm />
      </MainContainer>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  registerPressed: selectRegisterPressed,
  signInSignUpError: selectSignInSignUpError,
});

export default connect(mapStateToProps)(SignIn);

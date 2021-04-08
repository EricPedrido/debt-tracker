import React from "react";
import MainContainer from "../../components/main-container/main-container.component";
import SignIn from "../../components/sign-in/sign-in.component";

import "./sign-in-and-register.styles.scss";

const SignInAndRegister = () => (
  <div className='background'>
    <MainContainer className='main-container'>
      <SignIn />
    </MainContainer>
  </div>
);

export default SignInAndRegister;

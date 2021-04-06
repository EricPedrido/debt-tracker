import React from "react";

import { Input } from "antd";

import SignInButtonBar from "../sign-in-button-bar/sign-in-button-bar.component";

import "./verify-email.styles.scss";

// FEATURE CANCELLED

const VerifyEmail = ({ toVerify, cancelVerification }) => {
  const onCancel = () => {
    cancelVerification(toVerify);
  };

  return (
    <div>
      <Input
        type='number'
        className='verify-input'
        placeholder='Verification Code'
        size='large'
      />
      <SignInButtonBar
        leftButtonText='Cancel'
        rightButtonText='Confirm'
        leftOnClick={onCancel}
      />
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   toVerify: selectToVerify,
// });

// const mapDispatchToProps = (dispatch) => ({
//   cancelVerification: (userSub) => dispatch(cancelVerification(userSub)),
// });

export default VerifyEmail;

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Switch, Route, Redirect } from "react-router-dom";

import "antd/dist/antd.less";
import "./App.less";

import Header from "./components/header/header.component";
import SignInAndRegister from "./pages/sign-in-and-register/sign-in-and-register.component";
import HomePage from "./pages/homepage/homepage.component";

import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          render={() =>
            currentUser ? <HomePage /> : <Redirect to='/signin' />
          }
        />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndRegister />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

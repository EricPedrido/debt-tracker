import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.less';
import './App.less';

import Header from './components/header/header.component';
import SignIn from './components/sign-in/sign-in.component';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/signin' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;

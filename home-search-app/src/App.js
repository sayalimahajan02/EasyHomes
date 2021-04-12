import React from 'react';
import './App.scss';
import Header from './components/Header';
import FrontPage from './components/FrontPage';
import Login from './components/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <>
      <Header></Header>
      <FrontPage></FrontPage>
      <Route exact path="/signup" component={Signup} />
      <Route path='/login' component={Login} />
    </>
  );
}

export default App;

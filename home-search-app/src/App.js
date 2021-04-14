import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import FrontPage from './components/FrontPage/FrontPage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import faq from './components/faq/faq';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Header} />
        <Route exact path="/" component={FrontPage} />
        <Route path="/signup" component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/faq' component={faq} />
        {/* <Route path='/aboutus' component={Aboutus} /> */}
      </Router>
    </>
  );
}

export default App;

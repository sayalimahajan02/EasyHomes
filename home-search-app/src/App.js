import React, { Fragment } from 'react';

import './App.scss';

import Header from './components/Header/Header';

// import MapNav from './components/MapNav';

import FrontPage from './components/FrontPage/FrontPage';

import Login from './components/Login/Login';

import Signup from './components/Signup/Signup';

import faq from './components/faq/faq';

//import admin from './components/admin/admin';

import RealEstate from './components/AllPropertLists/RealEstate';

import PropertyDetails from './components/propertyDetails/propertyDetails';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';



function App() {

  return (

    <>

      <Router>

        <Fragment>

          <Header />

          <Switch>

            {/* / <Route exact path="/" component={Header} /> */}

            {/* <Route path='/mapNav' component={MapNav} /> */}

            <Route exact path="/" component={FrontPage} />

            <Route path="/signup" component={Signup} />

            <Route path='/login' component={Login} />

            <Route path='/faq' component={faq} />

            <Route path='/property' component={RealEstate} />

            {/* <Route path='/admin' component={admin} /> */}

            <Route exact path="/" render={() => (<Redirect to="./components/FrontPage/FrontPage" />)} />

            {/* <Route path='/aboutus' component={Aboutus} /> */}

            <Route path='/propertyDetails' component={PropertyDetails} />

          </Switch>

        </Fragment>

      </Router>

    </>

  );

}



export default App;
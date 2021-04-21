import React, { Fragment } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import FrontPage from './components/FrontPage/FrontPage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Seller from './components/Seller/Seller';
import faq from './components/faq/faq';
import aboutus from './components/Aboutus/aboutus'
import admin from './components/admin/admin';
import UserProfile from './components/UserProfile/userProfile';
import RealEstate from './components/AllPropertLists/RealEstate';
import PropertyDetails from './components/propertyDetails/propertyDetails';
import Footer from './components/Footer/Footer';
import Payment from './components/Paypal/Paypal';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


//routes to pages
function App() {

  return (
    <>
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route path="/signup" component={Signup} />
            <Route path='/profile' component={UserProfile} />
            <Route path='/login' component={Login} />
            <Route path='/faq' component={faq} />
            <Route path='/Seller' component={Seller} />
            <Route path='/property' component={RealEstate} />
            <Route path='/admin' component={admin} />
            <Route exact path="/" render={() => (<Redirect to="./components/FrontPage/FrontPage" />)} />
            <Route path='/aboutus' component={aboutus} />
            <Route path='/propertyDetails' component={PropertyDetails} />
            <Route path='/payment' component={Payment} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </>
  );
}



export default App;
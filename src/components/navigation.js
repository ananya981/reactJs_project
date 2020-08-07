import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import UserLogin from './Screens/Login/login';
import Dashboard from './Screens/Dashboard/dashboard';

export default class Navigation extends React.Component {
  render() {
    return( 
    <BrowserRouter>
    <Route exact path = '/' component = {UserLogin} />
    <Route path = '/dashboard' component = {Dashboard} />
    </BrowserRouter>   
    );
  }
}
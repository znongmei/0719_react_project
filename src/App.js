import React,{Component} from 'react';
import {Switch,Route} from "react-router-dom";
import Admin from './pages/admin/admin';
import Login from './pages/login/login';


export default class App extends Component{
  render(){
    return(
      <Switch>
        <Route path="/admin" component={Admin}/>
        <Route path="/login" component={Login}/>
      </Switch>
    )
  }
}
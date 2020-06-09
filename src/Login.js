import React ,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route, Switch ,Redirect,Link,NavLink} from 'react-router-dom';
import Signup from "./Signup";
import Routes from "./App";
import history from "./history";


class Login extends React.Component {

doLoginup= () => {
    window.location.reload(false);
        return history.push("/myaccount/");
 }

    render(){
       

    return (
        <div className="App-Login">
        <label>UserName / Login id:</label>
        <input type="textbox" ></input>
        <label>Password</label>
        <input type="password" placeholder="********"></input>
        
        <input type="submit" value="Submit" className="btn" onClick={this.doLoginup}></input> 
        </div>
     
     
    );
    }
}

export default Login;
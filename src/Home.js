import React ,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route, Switch ,Redirect,Link,NavLink} from 'react-router-dom';
import Signup from "./Signup";
import Login from "./Login";
import Routes from "./App";
import history from "./history";

class Home extends React.Component{

  constructor(props){
    super(props);
    
    this.state={
    isLogin:false,
    isSignup:false,
  };
  this.doLogin = this.doLogin.bind(this);
}
  doLogin()
  {this.setState({isLogin:true});
console.log("LOgin value:"+this.state.isLogin);} 
  //this.onClick.bind(this);
  doSignup= () => {
    window.location.reload(false);
        return history.push("/signup/");
       
  
 }


  render(){
    const isLoggedIn = this.state.isLogin;
    const isSignedup = this.state.isSignup;
    let button;
    if (isLoggedIn) {
      button = <Login/>;
    } 
  
    return (
      

    <div className="App">
      <div class="App-Content">
      <div className="Top">
      <h3 className="intro">Welcome to Edunomics</h3> 
      <button className="btn" value="Login" onClick={this.doLogin}>Login</button>
      <button className="btn" value="Signup" onClick={this.doSignup}>Signup</button>
        
      </div>
      
      <div className="App-Main">
        <div className="App-Main-Content">
        <h2>WHERE DO YOU WANT TO GO TODAY ?</h2>
        <h3>Share your ultimate travel bucket list with us </h3>
        </div>
       {button}

     </div>


      </div>
 
      <body className="App-Body">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
         Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          
        </p>
        
        <img src={logo} className="App-background" alt="info" />

        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
         qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

        </p>
      </body>
    </div>
  );
    }

}


export default Home;

import { useHistory } from "react-router-dom";
import React ,{ Component } from 'react';
import { withRouter } from 'react-router';
import './Signup.css';

class Signup extends React.Component{
    render(){
    return(
        <div className="template">

<div className="App-Signup">

<form className="Signup-form">
<label>UserName / Login id:</label>
<input type="textbox" ></input>
<label>Email</label>
<input type="email"></input>
<label>Password</label>
<input type="password" placeholder="********"></input>
<input type="submit" value="Signup" className="btn"></input> 
</form>

</div> 

        </div>
         

    );
    }
    
}

export default Signup;
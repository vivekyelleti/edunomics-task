
import React, { Component } from "react";
import { BrowserRouter as Router , Route, Switch ,Redirect,Link,NavLink} from 'react-router-dom';
import Signup from "./Signup";
import Routes from "./App";
import history from "./history";
import "./MyAccount.css";


class Inhome extends React.Component{
    render(){
    return(
        <div>
            <h2>Inhome</h2>
        </div>
    );
    }
}

function Sessions(){
    return(
        <div>
            <h2>Sessions</h2>
        </div>
    )
}

function Settings(){
    return(
        <div>
            <h2>Settings</h2>
        </div>
    )
}

function Downloads(){
    return(
        <div>
            <h2>Downloadable content</h2>
        </div>
    )
}

function About(){
    return(
        <div>
            <h2>About</h2>
        </div>
    )
}

class MyAccount extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
        isHome:false,
        isSessions:false,
        isDownloads:false,
        isSettings:false,
        isAbout:false,
      };
      this.setHome = this.setHome.bind(this);
      this.setSessions = this.setSettings.bind(this);
      this.setDownloads=this.setDownloads.bind(this);
      this.setSettings = this.setSettings.bind(this);
      this.setAbout=this.setAbout.bind(this);
    }
    setHome()
    {this.setState({isHome:true});
     this.setState({isSessions:false});
     this.setState({isDownloads:false});
     this.setState({isSettings:false});
     this.setState({isAbout:false});} 

     setSessions()
    {this.setState({isHome:false});
     this.setState({isSessions:true});
     this.setState({isDownloads:false});
     this.setState({isSettings:false});
     this.setState({isAbout:false});} 

     setDownloads()
    {this.setState({isHome:false});
     this.setState({isSessions:false});
     this.setState({isDownloads:true});
     this.setState({isSettings:false});
     this.setState({isAbout:false});} 

     setSettings()
    {this.setState({isHome:false});
     this.setState({isSessions:false});
     this.setState({isDownloads:false});
     this.setState({isSettings:true});
     this.setState({isAbout:false});} 

     setAbout()
    {this.setState({isHome:false});
     this.setState({isSessions:false});
     this.setState({isDownloads:false});
     this.setState({isSettings:false});
     this.setState({isAbout:true});} 

    render(){

        const home = this.state.isHome;
        const sessions = this.state.isSessions;
        const downloads = this.state.isDownloads;
        const settings = this.state.isSettings;
        const about = this.state.isAbout;

        let displayContent;
        if (about) {
          displayContent=<About />;
        } 
        else if(sessions){
            displayContent=<Sessions/>;
        }
        else if(downloads){
            displayContent=<Downloads />;
        }
        else if(settings){
            displayContent=<Settings/>;
        }
        else if(home)
        {
            displayContent=<Inhome />;
        }
        else
        {
            displayContent=<Inhome />;
        }
        
        return(
            <div className="my-account">
                <div className="top-header">
                    <h2 >Welcome to Edunomics</h2>
                    <input type="button" className="btn" value="MyAccount" ></input>
                </div>
                <div className="middle-content">

                <div className="nav-bar">
                    <input type="button" className="nav-btn" value="Home" onClick={this.setHome}></input>
                    <input type="button" className="nav-btn" value="Sessions" onClick={this.setSessions}></input>
                    <input type="button" className="nav-btn" value="Downloads" onClick={this.setDownloads}></input>
                    <input type="button" className="nav-btn" value="Settings" onClick={this.setSettings}></input>
                    <input type="button" className="nav-btn" value="About" onClick={this.setAbout}></input>
                </div>
                
                <div className="content">

                    <div className="display">
                        
                    {displayContent}

                    </div>

                    <div className="bottom-bar">
                    <div className="bottom-bar-top">
                    <div className="topics-covered">
                        <h2>Topics Covered</h2>
                    </div>
                    <div className="recent-activities">
                        <h2>Recent Activities</h2>
                    </div>

                    </div>
                    
                    <div className="performance">
                        <h2> Performance</h2>
                    </div>

                </div>


                </div>
               
                
                </div>
            </div>

        );
    }
}

export default MyAccount;
import React, { useState, useEffect } from 'react';
import AppContext from "./AppContext";
import logo from "./ui/logo-coral.svg";

import "./css/uifont.css";
import "./css/props.css";
import "./css/App.css";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

//Screen
import Header from "./screens/header";
import Sidebar from "./screens/sidebar";
import HomePage from "./screens/home";
import Rightbar from "./screens/rightbar";
import CoursePage1 from "./screens/course1";
import CoursePage2 from './screens/course2';
import CoursePage3 from './screens/course3';
import DiscoverPage from "./screens/discover";
import CategoriesPage from "./screens/categories";
import MyCoursesPage from "./screens/mycourses";
import MyProfilePage from "./screens/myprofile";
import LoginPage from "./screens/Login";

import AccountPage from "./screens/oauth";

import * as fire_base from "firebase";
global.firebase = fire_base;
global.fire = {
    ID: null
};
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DB_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
// Initialize Firebase
global.firebase.initializeApp(firebaseConfig);



export default function AppLoader(){

    const [isFireUser, setIsFireUser] = useState(false);

    const initFirebase = async (context) => {
        global.firebase.auth().onAuthStateChanged((user)=>{
          if(user){
              console.log("You are signed in...")
              setIsFireUser(true);
          }else{
            console.log("You are guest...");
            setIsFireUser(false);
            setTimeout(()=>{
                context.setAppLoaded(true);
            }, 500);
          }
        });
    }

    const splash = (context) => {
        return (
            <div className="App flex">      
                <div className="splash abs abc">
                    <img src={logo} className="bl" />
                </div>
            </div>
        )
    }

    const loadApp = async (context) => {
        await initFirebase(context);
    }

    return (
        <AppContext.Consumer>
            {
                context => {
                    return (
                        context.appLoaded() ? 
                        <div className="App flex">      
                                <HashRouter>    
                                <Sidebar />
                                <div className="app-content">
                                    <Route exact path="/" component={HomePage} />
                                    <Route path="/course/61a719b7be20c87ccd52fd92" component={CoursePage1} />
                                    <Route path="/course/6175274fc813f3b0d7681895" component={CoursePage2} />
                                    <Route path="/course/6175275bc813f3b0d7681899" component={CoursePage3} />
                                    <Route path="/discover" component={DiscoverPage} />
                                    <Route path="/cates" component={CategoriesPage} />
                                    <Route path="/my-courses" component={MyCoursesPage} />
                                    <Route path="/oauth" component={AccountPage} />
                                    <Route path="/my-profile" component={MyProfilePage} />
                                </div>    
                            </HashRouter>    
                        </div>
                        : 
                        <AppContext.Consumer>
                            {
                                context => {
                                    loadApp(context);
                                    return (splash(context))
                                }
                            }
                        </AppContext.Consumer>
                    )
                }
            }
        </AppContext.Consumer>
    )

}

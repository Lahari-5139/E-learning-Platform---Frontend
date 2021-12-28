import React, {useEffect, useState} from "react";
import Course1 from "../ui/course-1.png";
import Course2 from "../ui/course-2.jpg";
import Course from "../ui/course.jpg";
import axios from "axios";

import {
    NavLink,    
} from "react-router-dom";

const LoginPage = (props) => {
    var array = [];    
    useEffect(()=>{
        document.title = "AuxD ";
    })
    return(
        <div>
            <h1>Login!</h1>
            </div>
    )

}
export default LoginPage;
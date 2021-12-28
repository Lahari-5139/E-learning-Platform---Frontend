import React, {useEffect, useState} from "react";
import Course1 from "../ui/course-1.png";
import Course2 from "../ui/course-2.jpg";
import Course from "../ui/course.jpg";
import axios from "axios";

import {
    NavLink,    
} from "react-router-dom";

const MyProfilePage = (props) => {
    var array = [];    
    useEffect(()=>{
        document.title = "AuxD ";
    })
    var dislist = [];
    dislist.push(
        <div className="block rel">
            <div>
            <img src={"http://placeimg.com/100/105/people?"}  className="profile-pic" />
            </div>
            <ul>
            <li className= "list-style2">Name: Lahari</li>
            <li className= "list-style2">Email: vishnu_lahari@yahoo.com</li>
            <li className= "list-style2">Date Of Birth: 11-11-1999</li>
            </ul> 
        </div>
    );
    return (
        <div>
            <h1 className="title s24 fontb">My Profile</h1>
            <br/>
            <br/>
            <div className="courses rel flex">
                    {dislist}
                </div>
            </div>
    )
}

export default MyProfilePage;
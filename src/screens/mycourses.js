import React, {useEffect} from "react";
// import { Alert } from 'react-alert'
import {
    NavLink,    
} from "react-router-dom";

function MyCoursesPage(){

    useEffect(()=>{
        document.title = "My Courses";
    })

    var array_courses = ["Database", "Software Production Engineering", "Operating Systems"];
    var ids = ["6175274fc813f3b0d7681895", "6175275bc813f3b0d7681899", "61a719b7be20c87ccd52fd92"];
    let i=0;
    const cs = array_courses.map((c)=>{
        return <div className="meta rel"><li className="list-style"><NavLink className="list-style" to={"/course/" + ids[i++]}>{c}</NavLink><button className="button-style2">Unenroll</button></li></div>;
    });
    return (
        <div className="app-page rel">
            <h1 className="page-title s24 fontb c333">My Courses</h1>
            <br/>
            <br/>
            <div className="meta rel">
                <ul>
                {cs}
                </ul>
            </div>
        </div>
    )
}

export default MyCoursesPage;
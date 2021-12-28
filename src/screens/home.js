import React, {useEffect, useState} from "react";
import Course1 from "../ui/course-1.png";
import Course2 from "../ui/course-2.jpg";
import Course from "../ui/course.jpg";
import axios from "axios";

import {
    NavLink,    
} from "react-router-dom";

// function HomePage(){
 const HomePage = (props) => {
    var array = [];    
    useEffect(()=>{
        document.title = "AuxD ";
    })

    const [popularCourse, setPopularCourse] = useState([
        {
                        description: "Its OS, understanding the concepts of operating systems",
                        master: "61752749c813f3b0d7681892",
                        name: "Operating Systems",
                        __v: 0,
                        _id: "61a719b7be20c87ccd52fd92",
                        poster: Course
                    },
               {
                description: "Its DBMS, learn the fundamentals of database management system",
                master: "61752749c813f3b0d7681892",
                name: "Database",
                __v: 0,
                _id: "6175274fc813f3b0d7681895",
                poster: Course
                },
                {
                    description: "Its SPE, learn DevOps with this course!",
                    master: "61752749c813f3b0d7681892",
                    name: "Software Production Engineering",
                    __v: 0,
                    _id: "6175275bc813f3b0d7681899",
                    poster: Course
                }
    ]);
    // useEffect(() => {
    //     async function fetchBooks() {
    //         const response = await fetch('http://localhost:3000/getCourses');
    //         const json = await response.json();
    //         console.log()
    //         setPopularCourse(json.data);
    //     }
    //     fetchBooks();
    // }, []);
    //     axios.get('http://localhost:3000/getCourses')
    //     .then(response => {
    //         const res = response.data;
    //         setPopularCourse([...popularCourse, res]);
    //         console.log("heyyy", res);
    //         console.log("hahha" , popularCourse);
    //     })
    // }, []);
        // fetch('http://localhost:3000/getCourses')
        // .then(response => response.json())
        // .then(({response: popularCourse}) => {
        //     console.log(response.data);
        //     console.log(popularCourse);
        //     setPopularCourse(popularCourse);
        // });
//         axios.get('http://localhost:3000/getCourses', {})
//   .then(function (response) {
//     // handle success
//     console.log("Hi");
//     console.log(response.data);
//     console.log("hi2");
//     var n = Object.keys(response.data).length;
//     console.log(n);
//     for(let i=0;i<n;i++)
//     {
//        var item = response.data[i];
//        console.log(item.name);
//        array.push(item);
//     }
// //     // setPopularCourse(response);
//   })

//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
  
//     },[])

    // const popularCourse = array;
   
    //     [
    //         {
    //             description: "Its OS, understanding the concepts of operating systems",
    //             master: "61752749c813f3b0d7681892",
    //             name: "Operating Systems",
    //             __v: 0,
    //             _id: "61a719b7be20c87ccd52fd92",
    //             poster: Course
    //         },
    //    {
    //     description: "Its DBMS, learn the fundamentals of database management system",
    //     master: "61752749c813f3b0d7681892",
    //     name: "Database",
    //     __v: 0,
    //     _id: "6175274fc813f3b0d7681895",
    //     poster: Course
    //     },
    //     {
    //         description: "Its SPE, learn DevOps with this course!",
    //         master: "61752749c813f3b0d7681892",
    //         name: "Software Production Engineering",
    //         __v: 0,
    //         _id: "6175275bc813f3b0d7681899",
    //         poster: Course
    //     }
    // ]
        // {
        //     ID: 2,
        //     title: "Creating a beautiful Portrait Illustration. Learning new Technics and Tricks.",
        //     tutor: {
        //         ID: 2,
        //         name: "Uran Design",
        //         username: "urancd",
        //         dp: "http://placeimg.com/100/100/people?tutor-" + 2,
        //     },
        //     duration: "1 hr 13 min",            
        //     poster: Course2
        // }
    // );

    const [topTutors, setTopTutors] = useState([
        {
            name: "Ritik",
            email: "ritik.kakwani5@gmail.com",
        }
        
    ]);

    //Live Tutors List
    var tutorList = [];
    for(let i = 0; i < 8; i++){
        tutorList.push(
            <button className="tutor rel" key={"tutor-live-" + i}>
                <img src={"http://placeimg.com/100/100/people?" + i}  className="bl" />
            </button>
        );
    }

    var courseList = [];
    for(let i = 0; i < popularCourse.length; i++){
        courseList.push(
            <NavLink to={"/course/" + popularCourse[i]._id} className="course rel" key={"popular-course-" + i}>
                <div className="block rel" style={{
                    background: "#e2e2e2 url(" + popularCourse[i].poster +") no-repeat center"
                    // backgroundColor: "#aaaa",
                    // backgroundImage: "https://leverageedu.com/blog/wp-content/uploads/2019/11/List-of-Courses-after-10th-Standard.jpg",
                }}>

                    {/* <div className="user abs aic flex">
                        <div className="pic">
                            <img src={popularCourse[i].tutor.dp} className="bl" />
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb cfff">{popularCourse[i].tutor.name}</h2>
                            <h2 className="s13 uname fontn cfff">@{popularCourse[i].tutor.username}</h2>
                        </div>
                    </div> */}

                    <div className="dura abs">
                        <h2 className="s13 name fontb cfff">{popularCourse[i].name}</h2>
                    </div>

                    <div className="course-title abs">
                        <h2 className="s15 name fontb cfff">{popularCourse[i].description}</h2>
                    </div>

                </div>
            </NavLink>
        );
    }

    var topTutorsList = [];
    for(let i = 0; i < topTutors.length; i++){
        topTutorsList.push(
            <a href="#" className="user-block rel noul" key={"top-tutors-" + i}>
                <div className="user aic flex">
                    <div className="pic">
                        <img src={"https://www.pngitem.com/pimgs/m/528-5286598_all-photo-png-clipart-male-teacher-clipart-png.png"} className="bl" />
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 name fontb c333">{topTutors[i].name}</h2>
                        {/* <h2 className="s13 uname fontn c333">@{topTutors[i].username}</h2> */}
                    </div>
                </div>                
            </a>
        );
    }

    return (
        <div className="home-page rel">

            {/* *Tutors Live Now */}
            {/* <div className="section rel">
                <h2 className="title s24 fontb">Streaming <span  className="fontn">Now</span></h2>
                <div className="tutors rel flex">
                    {tutorList}
                </div>
            </div> */}

            {/**Popular Courses */}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Popular <span  className="fontn">This Week</span></h2>
                <div className="courses rel flex">
                    {courseList}
                </div>
            </div>

            {/**Top Tutors */}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Top <span  className="fontn">Tutors</span></h2>
                <div className="top-tutors rel flex">
                    {topTutorsList}
                </div>
            </div>

        </div>
    )
}

export default HomePage;
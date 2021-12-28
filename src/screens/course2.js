import React, {useState} from "react";

import Course1 from "../ui/course-1.png";
import Course from "../ui/course.jpg";
import Course2 from "../ui/course-2.jpg";
import Course_os from "../ui/Course_os.jpg";
import Course_db from "../ui/Course_db.jpg";
import Course_spe from "../ui/Course_spe.png";

// const clickFunc= () => {
//     console.log("in onclick function");
//     return(
//         <h2 className="txt ibl fontn s15 c333">I am a newbie</h2>  

//     // <div className="messages aic flex">
//     //                             <div className="bubble rel">
//     //                                 <h2 className="txt ibl fontn s15 c333">I am a newbie</h2>                                    
//     //                             </div>
//     //                             <div className="bubble rel">
//     //                                 <h2 className="txt ibl fontn s15 c333">Love this course...</h2>                                    
//     //                             </div>
//     //                             <div className="bubble bubble-mine rel">
//     //                                 <h2 className="txt ibl fontn s15 c333">Hey</h2>                                    
//     //                             </div>
//     //                             <div className="bubble bubble-mine rel">
//     //                                 <h2 className="txt ibl fontn s15 c333">Dope Intro, thanks!@</h2>                                    
//     //                             </div>
//     // </div>
//     )
// }
function CoursePage(props){

    const [course, setCourse] = useState(
        
        {
            ID: "6175274fc813f3b0d7681895",
            title: "Database",
            about: "Its DBMS, learn the fundamentals of database management system",
            tutor: {
                ID: 1,
                name: "Ritik",
                username: "Ritik",
                dp: "https://www.pngitem.com/pimgs/m/528-5286598_all-photo-png-clipart-male-teacher-clipart-png.png",
            },
            duration: "90 min",            
            poster: Course_db,

            videos: [
                {
                    ID: 1,
                    title: "Introduction",
                    duration: "03 min 24 secs"                    
                },
                {
                    ID: 2,
                    title: "Getting Started",
                    duration: "09 min 55 secs"                    
                },
                {
                    ID: 3,
                    title: "The Illustration",
                    duration: "62 mins 48 secs"                    
                }
            ]
        }

    );

    const courseID = props.match.params.ID;

    var courseVideos = [];

    for(let i = 0; i < course.videos.length; i++){
        courseVideos.push(
            <a href="#" key={"course-video-" + i} className="noul aic rel flex">
                <div className="id s18 fontn cfff">{course.videos[i].ID}</div>
                <div className="meta rel">
                    <h1 className="s15 lbl fontb c333">{course.videos[i].title}</h1>
                    <h1 className="s13 dur fontn c777">{course.videos[i].duration}</h1>
                </div>
            </a>            
        );
    }
    
    return (
        <div className="course-page rel flex">


            <div className="course-info rel">

                <div className="tutor rel aic flex">
                    <div className="pic">
                        <img src={course.tutor.dp} className="bl" />
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 name fontb c333">{course.tutor.name}</h2>
                        <h2 className="s13 uname fontn c777">Course Tutor</h2>
                    </div>
                </div>

                <div className="course-meta">
                    <h2 className="s24 title fontb c333">{course.title}</h2>
                    <p className="s18 about fontn c777" dangerouslySetInnerHTML={{ __html: course.about}} />

                    <div className="section section-b rel">
                        <h2 className="title s24 fontb">Course <span  className="fontn">Achievements</span></h2>
                        <div className="course-stats aic flex">
                            <div className="stats-box flex">
                                <div className="ico ico-points s24 icon-shield" />
                                <h2 className="val s15 c333 fontb">1800</h2>
                                <h2 className="lbl s13 c777">points</h2>
                            </div>
                            <div className="stats-box flex">
                                <div className="ico ico-battery s24 icon-battery-90" />
                                <h2 className="val s15 c333 fontb">45.3%</h2>
                                <h2 className="lbl s13 c777">complete</h2>
                            </div>
                            <div className="stats-box flex">
                                <div className="ico ico-battery s24 icon-battery-90" />
                                <h2 className="val s15 c333 fontb">+26</h2>
                                <h2 className="lbl s13 c777">level</h2>
                            </div>
                        </div>
                    </div>

                    <div className="section section-b rel">                    
                        <h2 className="title s24 fontb">Course <span  className="fontn">Details</span></h2>
                        <div className="course-videos aic flex">
                            {courseVideos}
                        </div>
                    </div>

                </div>

            </div>

            <div className="course-preview rel">

                <div className="player rel">
                    <video poster={course.poster} />
                    <div className="ctrls abs aic flex">
                        <button className="icon-pause s24 pp" />
                        <div className="timer rel fontn s15 cfff">
                            02:54 / 09:55
                        </div>
                        <div className="slider rel">
                            <div className="prog rel">
                                <div className="bar rel">
                                    <div className="knob abs" />
                                </div>
                            </div>
                        </div>
                        <button className="icon-volume-100 s24 vol" />
                        <button className="icon-full-screen-enter2 s24 fs" />
                    </div>
                </div>

                <div className="extras-block rel flex">

                    <div className="chat rel">
                        <div className="section section-b rel">                    
                            <h2 className="title s24 fontb">Chat<span  className="fontn"> Room</span></h2>
                            <div className="bubble rel">
                                <button className="button-style"> Join Chat Room</button>
                            </div>
                            {/* <div className="messages aic flex">
                                <div className="bubble rel">
                                    <h2 className="txt ibl fontn s15 c333">I am a newbie</h2>                                    
                                </div>
                                <div className="bubble rel">
                                    <h2 className="txt ibl fontn s15 c333">Love this course...</h2>                                    
                                </div>
                                <div className="bubble bubble-mine rel">
                                    <h2 className="txt ibl fontn s15 c333">Hey</h2>                                    
                                </div>
                                <div className="bubble bubble-mine rel">
                                    <h2 className="txt ibl fontn s15 c333">Dope Intro, thanks!@</h2>                                    
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="now-watching rel">
                        <div className="section section-b rel">
                        <h2 className="title s24 fontb">Live<span  className="fontn"> Class</span></h2>
                        <h4>Live Class scheduled at 4.30pm</h4></div>
                        {/* <div className="section section-b rel"> */}
                                <a href= "https://meet.google.com/grd-eesq-xbm" target="_blank">
                                    <button className="button-style">Click to join Live Class</button>
                                    </a>
                        {/* </div> */}
                    </div>
                    {/* <div className="now-watching rel">
                        <div className="tooltip abs s13 fontb cfff">86 Live Now</div>
                        <div className="section section-b rel">                    
                            <h2 className="title s24 fontb">Now <span  className="fontn">Watching</span></h2>
                            <div className="you-list rel">
                                <div className="you rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/100/100/people?guest-1" className="bl" />
                                    </div>
                                    <div className="meta rel">
                                        <h2 className="s15 name fontb c333">Grey Montgommery</h2>
                                        <h2 className="s13 uname fontn c777">@gregdomm</h2>
                                    </div>
                                </div>
                                <div className="you rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/100/100/people?guest-2" className="bl" />
                                    </div>
                                    <div className="meta rel">
                                        <h2 className="s15 name fontb c333">Leila Jefferson</h2>
                                        <h2 className="s13 uname fontn c777">@leilaearns</h2>
                                    </div>
                                </div>
                                <div className="you rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/100/100/people?guest-3" className="bl" />
                                    </div>
                                    <div className="meta rel">
                                        <h2 className="s15 name fontb c333">Leila Jefferson</h2>
                                        <h2 className="s13 uname fontn c777">@leilaearns</h2>
                                    </div>
                                </div>
                                <div className="you rel aic flex">
                                    <div className="pic">
                                        <img src="http://placeimg.com/100/100/people?guest-4" className="bl" />
                                    </div>
                                    <div className="meta rel">
                                        <h2 className="s15 name fontb c333">Leila Jefferson</h2>
                                        <h2 className="s13 uname fontn c777">@leilaearns</h2>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    {/* </div> */}

                </div>

            </div>

        </div>
    )
    }

export default CoursePage;
import { useState } from 'react'
import '../../App.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from '../Slider/Slider';

export default function Portfolio() {

    const [Project] = useState([
        {
            title: 'twitter(X) Clone',
            work: [
                <a key="repo-link" href="https://github.com/EssamKonafa/twitter-X-clone" target="_blank" rel="noopener noreferrer">
                    GitHub Repository link
                </a>,
                "- Developed a Twitter clone using the MERN stack.",
                "- sign-in and sign-up processes and validation.",
                "- Developed the join page for user registration.",
                "- Worked with Node.js to enable real-time replies.",
                "- fetched user's info and edit user's profile",
                "- twitter message clone with socket",
                "- handling follow-unfollow for users",
                "- handling upload photos for post-profile-cover picture with cloudinary"
            ]
        }
    ])


    return (

        <>
            <div className='portS container-fluid'>
                <br />
                <br />
                <br />
                <h1 className='sectionMainName '>Portfolio  <i className="fa-solid fa-diagram-project"></i></h1>
                <h4>recent projects</h4>
                {Project.map((proj, index) => (
                    <div className='cardPortfo card col-md-4 mx-auto border p-2' key={index}>
                        <div className='row '>
                            <h3 className='text-center'>{proj.title}</h3>
                            <Slider />
                            <div>
                                <br />
                                {proj.work.map((work1, index) => (
                                    <p className='' key={index}>{work1}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <br />
                <br />
                <br />
            </div>
        </>
    )
}
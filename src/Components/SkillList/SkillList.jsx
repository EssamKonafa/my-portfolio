import '../../App.css'
import React, { useState } from 'react'

function SkillList() {

    const [skills] = useState([
        {
            title: 'frontend developer',
            items: ['React JS', 'HTML5', 'CSS3', 'BootStrap', 'JavaScript', 'RWD'],
            icon: <i className="fa-brands fa-buffer"></i>
        },
        {
            title: 'backend developer',
            items: ['Node JS', 'Mongo DB', 'Rest APIs', 'Express JS'],
            icon: <i className="fa-solid fa-box-open"></i>
        },
        {
            title: 'Other Skills',
            items: [ 'Problem Solving', 'GitHup', 'Webpack', 'PWA', 'secure code'],
            icon: <i className="fa-solid fa-check"></i>
        }
    ])

    return (
        <>
            <div className='skills container-fluid '>
                <br />
                <br />
                <br />

                <h1 className='sectionMainName '>Skills <i className="fa-solid fa-kitchen-set"></i> </h1>
                <h4 className=''>my technical level</h4>
                <br/>
                <div className='row'>
                    {skills.map((skill, content) => (
                        <div className='skillCard card col-md-3 mx-auto border p-4 ' key={content}>
                            <div>
                                <h4  className='text-center'>{skill.icon} <br/> {skill.title}</h4>
                                <div className='skillColumns'>
                                    {skill.items.map((item, itemIndex) => (
                                        <li className='skillColumn' key={itemIndex}>{item}</li>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <br />
                <br />
                <br />
            </div>
        </>
    )
}

export default SkillList;
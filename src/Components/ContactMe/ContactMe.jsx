import React, { useState } from "react"

export default function ContactMe() {

    const [contact] = useState([
        {
            title: "what's up",
            content: ['+201141945463'],
            icon: <i className="icon fa-brands fa-whatsapp"></i>

        },
        {
            title: 'Gmail',
            content: ['essamazoz9@gmail.com'],
            icon: <i className="icon fa-regular fa-envelope"></i>
        }
    ])

    return (
        <>
            <div className="contactS container-fluid ">
                <div>
                    <br />
                    <br />
                    <br />
                    <h1 className=' sectionMainName '>contact me  <i className="fa-solid fa-address-book"></i></h1>
                    <br/>
                    <br/>
                    
                    <div className="row">
                    {contact.map((tit, index) => (
                        <div className=" card text-center col-md-3 mx-auto border p-2" key={index}>
                            <div >{tit.icon} <br /> {tit.title}</div>
                            {tit.content.map((con1, conIndex) => (
                                <div key={conIndex}>
                                    {con1}
                                </div>
                            ))}
                        </div>
                    ))}
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </>
    )
}
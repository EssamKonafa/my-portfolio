
// export default function Serve() {

//     return (
//         <>
//         <div className='services container-fluid'>
//             <br/>
//             <br/>
//             <h1 className='sectionMainName '>Services</h1>
//             <h4>what can i offer</h4>
//             <ul >
//                 <li >Full-Stack Development: Proficient in MERN stack for end-to-end web solutions.</li>
//                 <li>Database Management: MongoDB expertise for efficient data handling.</li>
//                 <li>Server-Side APIs: Creation of secure and robust APIs with Express.js.</li>
//                 <li>UI Design: Crafting responsive user interfaces with JavaScript and React.</li>
//                 <li>Scalable Apps: Building adaptable web applications with React and Node.js.</li>
//             </ul>
//             <br/>
//             <br/>
//         </div>
//         </>
//     )
// }
import '../../App.css'

function ServiceCard({ title, description }) {
    return (
        <div className='serviceCard card col-md-3 mx-auto border p-4'>
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function Services() {
    const services = [
        {
            title: 'Web Apps',
            description: 'Building adaptable web applications with React and Node.js.',
            icon: <i className="fa-solid fa-table-columns"></i>
        },
        {
            title: 'UI Design',
            description: 'Crafting responsive user interfaces with JavaScript and React.',
            icon: <i className="fa-brands fa-uikit"></i>
        },
        {
            title: 'Server-Side APIs',
            description: 'Creation of secure and robust APIs with Express.js.',
            icon: <i className="fa-brands fa-quinscape"></i>
        },
    ];

    return (
        <div className='services container-fluid'>
            <br />
            <br />
            <h1 className='sectionMainName'>Services <i className="fa-solid fa-taxi"></i> </h1>
            <h4>What can I offer</h4>
            <br/>
            <div className='row'>
                {services.map((service, index) => (
                    <div className='serviceCard card col-md-3 mx-auto border p-4' key={index}>
                        <h4 className='text-center'>{service.icon} <br/> {service.title}</h4>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
            <br />
            <br />
        </div>
    );
}
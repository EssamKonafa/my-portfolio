import '../../App.css'
import { Link } from 'react-scroll'

export default function Navbar() {

    return (
        <>
                <nav className= "navbarSS navbar-expand bg-light mx-auto ">
                        <div className="collapse navbar-collapse">
                            <ul className="navS navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                                <li className="nav-item">
                                    <Link className="nav-link " to="Home" smooth={true} duration={100}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Skills" smooth={true} duration={100}>Skills</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Education" smooth={true} duration={100}>Education</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Services" smooth={true} duration={100}>Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Portfolio" smooth={true} duration={100}>Portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="ContactMe" smooth={true} duration={100}>contact</Link>
                                </li>
                            </ul>
                    </div>
                </nav>
        </>
    )

}

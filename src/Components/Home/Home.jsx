import '../../App.css';
import { Col, Row, Button } from 'react-bootstrap'; // Import Bootstrap components
import essam from './essam.png';
import cv from '../Home/EssamKonafa.pdf';

export default function Home() {
    return (
        <div className='homeBase'>
            <br />
            <br /><br />
            <br />
            <br />
            <div className='home container-fluid '>
                <Row>
                    <Col xs={12} md={3} className='socialIcons'>
                        <ul>
                            <li className='mx-3'>
                                <a href='https://www.facebook.com/essam.konafa/' target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </li>
                            <li className='mx-3'>
                                <a href='https://www.linkedin.com/in/essam-konafa-589310286/' target='_blank' rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                            <li className='mx-3'>
                                <a href='https://github.com/EssamKonafa' target='_blank' rel="noopener noreferrer">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={5}>
                        <h2 className='sectionMainName'>Essam Konafa <i className="wave fa-solid fa-hand"></i></h2>
                        <p className='subName'>Passionate about the MERN stack. Turning ideas into user-friendly applications that exceed expectations. Let's make your vision a reality.</p>
                        <a  href={cv} download>
                            <Button variant='dark'>
                                Download CV
                                <i className="fa-solid fa-download"></i>
                            </Button>
                        </a>
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={essam} alt='Essam' className='essam img-fluid'></img>
                    </Col>
                </Row>
            </div>
            <br />
            <br /><br />
            <br />
            <br />
        </div>
    );
}
import { Element, scroller } from 'react-scroll'
import ContactMe from './Components/ContactMe/ContactMe'
import Education from './Components/Education/Education'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio/Portfolio'
import Serve from './Components/Serve/Serve'
import SkillList from './Components/SkillList/SkillList'
import Up from './Components/Up/Up'
import './App.css'

function App() {

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 100,
      smooth: true,
    })
  }

  return (
    <>
      
        <Navbar scrollToSection={scrollToSection} />
        <Element name='Home'>
          <Home />
        </Element>
        <Element name='Skills'>
          <SkillList />
        </Element>
        <Element name='Education'>
          <Education />
        </Element>
        <Element name='Services'>
          <Serve />
        </Element>
        <Element name='Portfolio'>
          <Portfolio />
        </Element>
        <Element name='ContactMe'>
          <ContactMe />
        </Element>
          <Up />
      <Footer />
    </>
  )
}

export default App

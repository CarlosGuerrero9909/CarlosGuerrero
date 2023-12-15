import { NavLink } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Fotter from './Footer';
import Foot from "./Foot";

const Home = () => {
  return (
    <section className="bg-light p-5 min-vh-100">
      <div className='container-fluid'>
        <div className='d-sm-flex align-items-center justify-content-between'>
          <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
            <h1 className='display-6'>Hello! I am Carlos</h1>
            <h1 className='display-6 custom-font'>Systems engineer in training.</h1>
            <p className='pt-5'>Full stack Development</p>
            <NavLink to='/projects'><button className='btn btn-primary custom-btn ps-5 pe-5 fw-bold mt-2'>Look my projects</button></NavLink>
          </div>

          <div className="d-flex flex-column">
            <Player
              src='https://lottie.host/19dc4592-543d-47ff-b9ec-8a7756947b38/EC5JaRPDaH.json'
              className="player"
              loop
              autoplay
              style={{  maxWidth: '600px', height: 'auto'  }}
            />
          </div>
        </div>
        <About />
        <Projects />
        <Contact />
        <Fotter />
        <Foot />
      </div>
    </section>
  )
}

export default Home
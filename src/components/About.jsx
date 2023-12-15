import resume from '../assets/Carlos_CV.pdf'

const About = () => {
  return (
    <div className='container-fluid bg-light pt-5 d-flex flex-column align-items-center min-vh-100'>
      <p className="text-center lead m-4">
        I am a Systems Engineering student looking for my first opportunity to work as a developer.
        I stand out for being a person with the ability to analyze, teamwork, detail-oriented, autonomy and organization, passionate about continuous learning.
        I have knowledge in web application development with ReactJS, JavaScript, HTML5, CSS3, Bootstrap, Node js, Express js, MongoDB and
        I love working with Java, Spring Boot, MySQL, Postgress using tools that make application development more efficient such as Git , GitHub, UML, ORMs, etc.
      </p>
      <div>
        <img
          src='../../public/foto.jpg'
          className='img-fluid'
          style={{ maxWidth: '250px', height: 'auto' }}
          alt='foto'
        />
      </div>
      <a href={resume} download className="btn btn-primary mt-5 custom-btn fw-bold">Download My Resume</a>
      <h3 className='pt-5 pb-2 custom-color'>Languages and tools I use:</h3>

      <p className='lead'>
        <img className='me-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
        <img className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
        <img className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="35" />
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" width="35" height="35" />
        <img className='m-2' src="https://cdn.cdnlogo.com/logos/n/49/node-js.svg" alt="nodejs" width="40" height="40" />
        <img className='m-2' src="https://www.cdnlogo.com/logos/e/23/express.svg" alt="express" width="40" height="40" />

        <img className='m-2' src="https://cdn.cdnlogo.com/logos/m/25/mongodb.svg" alt="mongodb" width="40" height="40" />
        <img className='m-2' src="https://www.cdnlogo.com/logos/p/25/powered-by-mysql.svg" alt="mysql" width="40" height="40" />

        <img className='m-2' src="https://www.cdnlogo.com/logos/j/22/java.svg" alt="java" width="45" height="45" />
        <img className='m-2' src="https://www.cdnlogo.com/logos/s/91/spring.svg" alt="spring" width="35" height="35" />

        <img className='m-2' src="https://cdn.cdnlogo.com/logos/g/31/github.svg" alt="github" width="40" height="40" />
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" width="35" height="35" />
      </p>

    </div>
  )
}

export default About
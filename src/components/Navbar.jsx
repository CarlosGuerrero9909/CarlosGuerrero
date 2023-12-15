import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-light navbar navbar-expand-lg shadow-sm p-4">
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center justify-content-lg-between">
        
        <div className="navbar-brand text-center mb-4 mb-md-0 mb-lg-0">
          <span className="ms-2">Carlos Guerrero</span>
        </div>
        
        <div className="text-center mt-3 mt-lg-0">
          <NavLink to='/' className="link me-5">Home</NavLink>
          <NavLink to='/about' className="link me-5">About</NavLink>
          <NavLink to='/projects' className="link me-5">Projects</NavLink>
          <NavLink to='/contact' className="link me-5">Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
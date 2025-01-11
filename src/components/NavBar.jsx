import { Link } from "react-router-dom"
import "../css/Navbar.css"

const NavBar = () => {

  return (

    <nav>
        <div className="navbar-brand">

                <Link to="/">Movie App</Link>

        </div>

        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>

            <Link to ="/favourite" className="nav-link">Favoruites</Link>

        </div>


    </nav>
  )
}

export default NavBar
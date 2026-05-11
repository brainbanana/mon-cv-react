import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
      <section className="container">

        <Link className="navbar-brand" to="/">
           <strong>David Sacristain</strong>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <section className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services" >Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Realisations" >Realisations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Blog" >Blog</Link>
            </li>
            <li className="nav-item"  >
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </section>

      </section>
    </nav>
  );
}

export default Navbar;
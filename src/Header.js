import React from 'react';
import { Link } from 'react-router-dom';
const Header = () =>{
   return(
    <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
            <div className="container-fluid">
                 <Link className="navbar-brand text-danger" to="/">THE BIOGRAPHYS </Link>
                {/* <a className="" href="/"></a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/actress">Actress </Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/actors">Actors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/technicians">Technicians</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    </section>
  )
}
export default Header;
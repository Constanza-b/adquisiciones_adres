import React from 'react';
import { Link } from 'react-router-dom';

// En tu componente de React donde se encuentra la barra de navegación
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">Adquisiciones App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Contenido</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/crear-adquisicion">Crear Adquisicion</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/listar-adquisicion">Consultar Adquisiciones</Link>
                        </li>
                     
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
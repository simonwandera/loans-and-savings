import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CurrentProfile = () => {

    return (

        <div className="card mb-4">
            <div className="card-header ">
                <i className="fas fa-user me-1"></i>
                <h5>Current Account</h5>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='./save' className='nav-link'>Save</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='./withdraw' className='nav-link'>Withdraw</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Statement</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to='./savings_statement' className='dropdown-item'>Savings statement</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default CurrentProfile;


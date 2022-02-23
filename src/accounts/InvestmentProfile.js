import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const InvestmentProfile = () => {

    return (

        <div class="card mb-4">
            <div class="card-header ">
                <i class="fas fa-user me-1"></i>
                <h5>Investment account</h5>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">  
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to='./save' className='nav-link'>Invest</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='./withdraw' className='nav-link'>Withdraw</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Statement</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to='./savings_statement' className='dropdown-item'>Savings statement</Link></li>
                                    <li><Link to='./loans_statement' className='dropdown-item'>Loans statement</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default InvestmentProfile;
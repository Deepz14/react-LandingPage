import React from 'react';
import 'bootstrap/js/src/collapse';
import 'bootstrap/js/src/carousel';
import logo from '../images/cake logo.jpg';
import slider from '../images/LANDING PAGE BG.jpg';
import './style.css';

export const LandingPg = () => {
    return (
    <div className="landingpg">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active one">
                    <img src={slider} className="vh-100 vw-100" alt="..."></img>
                </div>
                <div className="carousel-item two">
                    <img src={slider} className="vh-100 vw-100" alt="..."></img>
                </div>
                <div className="carousel-item three">
                    <img src={slider} className="vh-100 vw-100" alt="..."></img>
                </div>
            </div>    
        </div>
        
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container navbar-container mt-3">
                <span className="navbar-brand">
                    <img  className="rounded-sm" src={logo} alt="logo" width="80"></img>
                </span>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <p className="nav-link">
                                <span>
                                    <svg viewBox="0 0 16 16" className="bi bi-telephone-fill mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                                    </svg>
                                </span>
                                Contact Us
                            </p>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                <svg viewBox="0 0 16 16" className="bi bi-geo-alt-fill mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                                Delivery In
                            </span>   
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Menu <span>
                                <svg  viewBox="0 0 16 16" className="bi bi-list-ul ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg>    
                            </span>
                            </p>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

        <div className="container">
            <div className="row">
                <div className="col-md-6 content">
                    <h1 className="title mt-3 text-light">MADE WITH LOVE</h1>
                    <p className="description mt-3 text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi earum iste nostrum iusto minus dolore.
                    </p>
                    <p className="btn btn-warning explore-btn mt-3">EXPLORE</p>
                </div>
            </div>
        </div>
    </div>
    )
}

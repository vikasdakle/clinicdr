import React, { useEffect, useRef } from 'react';
import herohomepdimg from '../assets/herohomepdimg.jpg';
import bglogoremove from '../assets/newlogoOne.jpeg';
import newheroimgOne from '../assets/newheroimgOne.jpg';
import newdoctor from '../assets/newdoctor.png';
import newherocanva from '../assets/newheroOnecanva.jpg';
import './home.css';  // Make sure the CSS file is correctly linked
import mobileimg from '../assets/spinehospitalmobile.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Services from './Services';
import About from './About';
// import mobileimg from '../assets/spinehospitalmobileresponsiveTwo.jpg'




const Home = ({ testimonialsRef }) => {
    const navigate = useNavigate()
    // const testimonialsRef = useRef(null);
    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const navbar = document.querySelector('.navbar');
    //         if (window.scrollY > 50) {
    //             navbar.classList.add('scrolled');
    //         } else {
    //             navbar.classList.remove('scrolled');
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg smnav   navbar-transparent px-2"
                style={{ zIndex: 1000 }}
            >
                <a className="navbar-brand d-flex justify-content-between align-items-center w-100">
                    <h1 className="m-0 text-white d-flex align-items-center">
                        <a href="/">
                            <img
                                className="img img-fluid"
                                style={{ height: "50px", width: "auto" }}
                                src={bglogoremove}
                                alt="Logo"
                            /></a>
                    </h1>
                    <a
                        className="nav-item nav-link active"
                        style={{
                            fontSize: "16px",
                            backgroundColor: "rgb(46,67,130)", // Choose a color you prefer
                            color: "#fff",
                            borderRadius: "50px", // Fully rounded
                            padding: "5px 10px", // Adjust padding for pill shape
                            textAlign: "center",
                            marginLeft: "10px"
                        }} onClick={() => navigate('/review')}>
                        View Review
                        {/* <i className="fa fa-arrow-right ms-2"></i> */}
                    </a>
                </a>

                {/* <a href="/" className="navbar-brand d-flex align-items-center" style={{ gap: "20px" }}>
                    <h1 className="m-0 text-white">
                        <img
                            className="img img-fluid"
                            style={{ height: "50px", width: "auto" }}
                            src={bglogoremove}
                            alt="Logo"
                        />
                    </h1>
                    <button className="btn btn-primary">View Review</button>
                </a> */}

                {/* <a href="/" className="navbar-brand  d-flex space-between align-items-center    ">
                    <h1 className="m-0 text-white">
                        <img
                            className="img img-fluid"
                            style={{ height: "50px", width: "auto" }}
                            src={bglogoremove}
                            alt="Logo"
                        />
                    </h1>
                    <button className='btn btn-primary'>View Review</button>
                </a> */}
                {/* <button
                    type="button"
                    className="navbar-toggler me-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-5 p-lg-0">
                        <a href="/"
                            className="nav-item nav-link active"
                            style={{
                                fontSize: "19px",
                                backgroundColor: "rgb(46,67,130)", // Choose a color you prefer
                                color: "#fff",
                                borderRadius: "50px", // Fully rounded
                                padding: "10px 20px", // Adjust padding for pill shape
                                textAlign: "center",
                            }}>
                            नाव नोंदणीसाठी संपर्क : +91 8788990261
                        </a>
                    </div>
                    {/* <a href="/appointment" style={{ borderRadius: "50px", padding: "10px 20px", textAlign: "center", }} className="btn btn-primary  py-2 px-lg-4 d-none d-lg-block ms-3">
                        View Review
                        <i className="fa fa-arrow-right ms-2"></i>
                    </a> */}
                    <a
                        className="nav-item nav-link active"
                        style={{
                            fontSize: "19px",
                            backgroundColor: "rgb(46,67,130)", // Choose a color you prefer
                            color: "#fff",
                            borderRadius: "50px", // Fully rounded
                            padding: "10px 20px", // Adjust padding for pill shape
                            textAlign: "center",
                            marginLeft: "10px"
                        }} onClick={() => navigate('/review')}>
                        View Review
                        {/* <i className="fa fa-arrow-right ms-2"></i> */}
                    </a>
                </div>
            </nav>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg lgnav fixed-top navbar-transparent"
                style={{ zIndex: 1000 }}
            >
                <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h1 className="m-0 text-white">
                        <img
                            className="img img-fluid"
                            style={{ height: "80px", width: "auto" }}
                            src={bglogoremove}
                            alt="Logo"
                        />
                    </h1>
                </a>
                <button
                    type="button"
                    className="navbar-toggler me-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-5 p-lg-0">
                        <a href="/"
                            className="nav-item nav-link active fw-bold"
                            style={{
                                fontSize: "19px",
                                backgroundColor: "white", // Choose a color you prefer
                                color: "rgb(46,67,130)",
                                borderRadius: "50px", // Fully rounded
                                padding: "10px 20px", // Adjust padding for pill shape
                                textAlign: "center",
                            }}>
                            नाव नोंदणीसाठी संपर्क : +91 8788990261
                        </a>
                    </div>
                    {/* () => scrollToSection(testimonialsRef) */}
                    {/* <a href="/appointment" style={{ borderRadius: "50px", padding: "10px 20px", textAlign: "center", }} className="btn btn-primary  py-2 px-lg-4 d-none d-lg-block ms-3">
                        View Review
                        <i className="fa fa-arrow-right ms-2"></i>
                    </a> */}
                    <a
                        className="nav-item nav-link active fw-bold"
                        style={{
                            fontSize: "19px",
                            backgroundColor: "white", // Choose a color you prefer
                            color: "rgb(46,67,130)",
                            borderRadius: "50px", // Fully rounded
                            padding: "10px 20px", // Adjust padding for pill shape
                            textAlign: "center",
                            marginLeft: "10px"
                        }} onClick={() => navigate('/review')}>
                        View Review
                        {/* <i className="fa fa-arrow-right ms-2"></i> */}
                    </a>
                </div>
            </nav>

            {/* Hero Image Section */}
            <div className="hero-section mhOne position-relative full-height">
                <img
                    src={newherocanva}
                    alt="Hero Background"
                    className="hero-image img-fluid"
                />
            </div>
            <div className="hero-section mhTwo position-relative full-height">
                <img
                    src={mobileimg}
                    alt="Hero Background"
                    className="hero-image img-fluid"
                />
            </div>

            <About />
        </>
    );
}

export default Home;

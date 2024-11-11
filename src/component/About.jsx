import React from 'react';
import aboutimg from '../assets/aboutimg.jpeg'; // Replace with your actual image path
import aboutherorm from '../assets/aboutherorm.png'; // Replace with your actual image path
import './about.css'; // Import the CSS file

const About = () => {
    return (
        <div className="about-container">
            <div className="row g-0">
                {/* Left Side */}
                <div className="col-12 col-md-6 about-left d-flex flex-column justify-content-center align-items-start">
                    <div className="about-content sm:p-5 m-5">
                        <blockquote className="blockquote sm:mb-4 fw-bold" style={{ fontSize: '2rem' }}>About Us</blockquote>
                        <blockquote className="blockquote text-start mb-4" style={{ fontSize: '1.25rem' }}>
                            “आमच्यावर का विश्वास ठेवावा? आमच्याबद्दल अधिक जाणून घ्या!”
                        </blockquote>
                        <blockquote className="blockquote text-start mb-4">
                            उच्च गुणवत्ता उपचार: आमचे डॉक्टर मुलव्याध आणि संबंधित आरोग्य समस्यांवर अद्ययावत आणि प्रभावी उपचार पद्धती वापरतात. आम्ही रुग्णांच्या गरजा लक्षात घेऊन वैयक्तिकृत उपचार योजना तयार करतो.
                        </blockquote>

                        <div className="d-flex align-items-center mt-5 gap-3">
                            {/* Responsive Doctor's Logo */}
                            <img
                                src={aboutherorm}
                                alt="Dr. Dinesh Jagtap"
                                className="cir img-fluid"
                            />
                            <div>
                                <h5 className="m-0" style={{ fontSize: "25px" }}>Dr. Dinesh Jagtap</h5>
                                <small style={{ fontSize: "18px" }}>MBBS, MS, (Surgery)</small><br />
                                <small style={{ fontSize: "18px" }}>Colorectal Surgeon, Spine Specialist</small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="col-12 col-md-6 about-right p-0 d-flex">
                    <img
                        src={aboutimg}
                        alt="Doctor with Patient"
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;

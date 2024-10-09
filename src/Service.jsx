import React from 'react';
import SocialMedia from './components/SocialMedia';
import bannerImage from './assets/aboutBanner.png';
import Scroll from './components/Scroll';
import ServiceCard from './components/ServiceCard';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { NavLink } from 'react-router-dom';

const services = [
    {
        title: "Web Development",
        description: "We build responsive and high-performance websites tailored to your needs.",
        IconComponent: LanguageIcon,
    },
    {
        title: "SEO Optimization",
        description: "Improve your website’s search engine rankings and drive organic traffic.",
        IconComponent: SearchIcon,
    },
    {
        title: "Digital Marketing",
        description: "Boost your online presence and reach a wider audience with our marketing solutions.",
        IconComponent: TrendingUpIcon,
    },
    {
        title: "Graphic Design",
        description: "Creative design solutions for your brand, from logos to marketing materials.",
        IconComponent: DesignServicesIcon,
    },
    {
        title: "Consulting",
        description: "Get expert advice on how to grow your business and optimize operations.",
        IconComponent: BusinessCenterIcon,
    }
];

function Service() {
    return (
        <>
            {/* banner section */}
            <div className="vh-100 vw-100 bg-black text-white">
                {/* Background image with opacity */}
                <div className="position-absolute top-0 start-0 w-100 h-100">
                    <img
                        src={bannerImage}
                        alt="Office Background"
                        className="w-100 h-100 object-cover opacity-50"
                        style={{ filter: 'grayscale(150%)' }}
                    />
                </div>

                {/* Content container */}
                <div className="container h-100 d-flex flex-column justify-content-evenly position-relative z-0">

                    {/* Headings in the middle */}
                    <div className="d-flex align-items-center justify-content-center mt-2">
                        <div className="text-center">
                            <h1 className="display-4 fw-bold">
                                Empowering <span style={{ color: "#fa880c" }}>businesses</span> with <br />
                                <span style={{ color: "#fa880c" }}>creative solutions.</span>
                            </h1>
                            <p className="fw-semibold">
                                We provide cutting-edge digital solutions, <br /> from web development to SEO, designed to elevate your business.
                            </p>
                        </div>
                    </div>

                    {/* SocialMedia content at the bottom */}
                    <div>
                        <SocialMedia />
                    </div>
                </div>
            </div>

            {/* second section */}
            <div className="text-light" id='whatwedo'>
                <div className="container py-5">
                    <h2 className="text-center mb-4 fw-bold" style={{ color: '#fa880c' }}>Our Services</h2>
                    <div className="row">
                        {services.map((service, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <ServiceCard
                                    title={service.title}
                                    description={service.description}
                                    IconComponent={service.IconComponent} // Pass the component directly
                                />
                            </div>
                        ))}
                    </div>
                    {/* contact us Section */}
                    <div className="text-center py-5 text-light">
                        <h2 style={{ color: '#fa880c' }}>Ready to get started?</h2>
                        <p className='fw-semibold fs-5'>Contact us today to learn more about how we can help your business grow!</p>
                        <NavLink to="/contact-us" className="btn btn-outline-light">
                    Contact Us
                </NavLink>
                    </div>
                </div>
                <Scroll />
            </div>
        </>
    );
}

export default Service;

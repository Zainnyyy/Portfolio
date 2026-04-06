import React, { useState } from 'react'
import './Navbar.css'
// You can remove the logo import if you aren't using it elsewhere
// import logo from '../../assets/logo.svg' 
import underline from '../../assets/nav_underline.svg'

const Navbar = () => {

    const [menu, setMenu] = useState("home");

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -70; 
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
            setMenu(id);
        }
    };

    return (
        <div className='navbar'>
            {/* Changed from <img> to a <div> with text */}
            <div className="nav-logo">AZ</div>

            <ul className="nav-menu">
                <li onClick={() => scrollToSection("home")}>
                    <p>Home</p>
                    {menu === "home" && <img src={underline} alt="" />}
                </li>

                <li onClick={() => scrollToSection("about")}>
                    <p>About Me</p>
                    {menu === "about" && <img src={underline} alt="" />}
                </li>

                <li onClick={() => scrollToSection("services")}>
                    <p>Services</p>
                    {menu === "services" && <img src={underline} alt="" />}
                </li>

                <li onClick={() => scrollToSection("work")}>
                    <p>Portfolio</p>
                    {menu === "work" && <img src={underline} alt="" />}
                </li>

                <li onClick={() => scrollToSection("contact")}>
                    <p>Contact</p>
                    {menu === "contact" && <img src={underline} alt="" />}
                </li>
            </ul>

            <div 
                className="nav-connect"
                onClick={() => {
                    const section = document.getElementById("contact");
                    if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                    }
                }}
            >
                Connect With Me
            </div>
        </div> 
    )
}

export default Navbar
// import { useState } from 'react';

const Navbar = () => {

    // const [navbar,setNavbar] = useState('');
    
    /*This changes the background of the navbar when the window is scrolled -> just add navbar state the
     classname of nav*/
    // window.addEventListener('scroll', () => {
    //     if(window.scrollY > 80) {
    //         setNavbar('navbar--bg')
    //     } else {
    //         setNavbar('');
    //     }
    // })
    
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <h1 className="navbar__title">AnimeBinge</h1>
                <ul className="navbar__btns">
                    <li className="navbar__list">
                        <a href="/">Home</a>
                    </li>
                    <li className="navbar__list">
                        <a href="/discover">Discover</a>
                    </li> 
                    <li className="navbar__list">
                        <a href="/about-us">About Us</a>
                    </li>
                    <li className="navbar__list">
                        <button className="navbar__auth">Sign Up</button>
                    </li>
                    <li className="navbar__list">
                        <button className="navbar__auth navbar__login">Log In</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
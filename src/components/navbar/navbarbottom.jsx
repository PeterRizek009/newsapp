import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from "hamburger-react"

const NavbarBottom = () => {

    const links = ['Home', 'International', 'Sports', 'Business']

    const [active, setActive] = useState(false);


    const showMenu = () => {
        setActive(!active)
    }
    return (
        <>
            <nav className="flex justify-between md:justify-start items-center mt-0 mx-auto md:mt-0 py-2 h-12 w-full md:w-[1200px]  bg-[#393939]">
                <Link className="navbar-brand ms-5" to={"/"}>
                    <img className='py-2 md:py-0 w-[120px] md:ml-10' src={require("./Logo2.png")} alt='logo' />
                </Link>

                <div className="md:hidden px-2 scale-75">
                    <Hamburger color='white' onToggle={showMenu} />
                </div>


                <ul className={active ? "absolute mx-auto top-[9.8rem] bg- w-full bg-[#393939] md:flex justify-between items-center p-3  space-y-4" : "hidden md:flex mx-5"}>
                    <li className="nav-item ">
                        <Link className="nav-link active  hover:bg-red-500  p-3 cursor-pointer text-white" aria-current="page" to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link hover:bg-red-500  p-3 cursor-pointer text-white" to="solutions">International</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link hover:bg-red-500  p-3 cursor-pointer text-white" to="projects">Sports</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link hover:bg-red-500 cursor-pointer  p-3 text-white" to="aboutus">Business</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link hover:bg-red-500 cursor-pointer  p-3 text-white" to="aboutus">Contact us</Link>
                    </li>
                </ul>


            </nav>

        </>
    );
}

export default NavbarBottom;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from "hamburger-react"



const NavbarBottom = () => {

    

    const [active, setActive] = useState(false);

    

    const showMenu = () => {
        setActive(!active)
    }

    const links = ['Home', 'International', 'Sports', 'Business']


    return (
        <>
            <nav className="flex justify-between md:justify-start items-center mt-0 mx-auto md:mt-0 py-2 h-16 w-full md:w-[1200px]  bg-[#393939]">
                <Link className="navbar-brand ms-5" to={"/"}>
                    <img className='py-2 md:py-0 w-[120px] md:ml-10' src={require("./Logo2.png")} alt='logo' />
                </Link>

                <div className="md:hidden px-2 scale-75">
                    <Hamburger color='white' onToggle={showMenu} />
                </div>


                <ul  className={active === true ? "absolute mx-auto h-[300px] top-[9.9rem] z-50  w-full bg-[#393939] flex flex-col justify-start  p-3 space-y-4" : "hidden md:flex mx-5"}>
                    {links.map((link ,index) => (
                        <li
                            className="nav-item" key={index}>
                            <Link className="nav-link" aria-current="page" to={`/${link}`}>{link}</Link>
                        </li>
                    ))}
                </ul>


            </nav>

        </>
    );
}

export default NavbarBottom;

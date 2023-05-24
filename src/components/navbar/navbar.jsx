import React from 'react';
import NavbarTop from './navbartop';
import NavMiddlle from './navmiddle';
import NavbarBottom from './navbarbottom';


const Navbar = () => {
    return ( 
        <div className='top-0 w-full flex flex-col justify-between  md:px-2'>
        <NavbarTop/>
        <NavMiddlle/>
        <NavbarBottom/>
        </div>
     );
}
 
export default Navbar;
import React from 'react';
import NavbarTop from './navbartop';
import NavMiddlle from './navmiddle';


const Navbar = () => {
    return ( 
        <div className='absolute top-0  w-full flex flex-col md:px-2'>
        <NavbarTop/>
        <NavMiddlle/>
        </div>
     );
}
 
export default Navbar;
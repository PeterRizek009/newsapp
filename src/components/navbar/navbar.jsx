import React from 'react';
import NavbarTop from './navbartop';
import NavMiddlle from './navmiddle';
import NavbarBottom from './navbarbottom';
import { FaInstagramSquare } from 'react-icons/fa'
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'




const Navbar = ({ date, day }) => {


    const icons = [
        {
            item: <BsFacebook size={22} className='bg-blue-600 text-white p-1 rounded-full cursor-pointer' />
        },
        {
            item: <BsTwitter size={22} className='bg-cyan-600 text-white p-1 rounded-full cursor-pointer' />
        },
        {
            item: <FaInstagramSquare size={22} className='bg-fuchsia-600 text-white p-1 rounded-full cursor-pointer' />
        },
        {
            item: <BsYoutube size={22} className='bg-red-500 text-white p-1 rounded-full cursor-pointer' />
        }

    ]




    return (
        <div className='top-0 w-full flex flex-col justify-between'>

            <NavbarTop day={day} date={date} icons={icons}/>
            <NavMiddlle />
            <NavbarBottom icons={icons}/>

        </div>
    );
}

export default Navbar;
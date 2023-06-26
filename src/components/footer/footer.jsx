import React from 'react';
import logo from '../navbar/Logo2.png'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'

const images = [
    {
        id: 1,
        url: "images/1.png"
    },
    {
        id: 2,
        url: "images/2.png"
    },
    {
        id: 3,
        url: "images/4.png"
    },
    {
        id: 4,
        url: "images/5.png"
    }



]



const icons = [
    {
        item: <BsFacebook size={40} className='bg-blue-600 text-white p-1 rounded-full cursor-pointer' />
    },
    {
        item: <BsTwitter size={40} className='bg-cyan-600 text-white p-1 rounded-full cursor-pointer' />
    },
    {
        item: <FaInstagramSquare size={40} className='bg-fuchsia-600 text-white p-1 rounded-full cursor-pointer' />
    },
    {
        item: <BsYoutube size={40} className='bg-red-500 text-white p-1 rounded-full cursor-pointer' />
    }

]
const Footer = () => {
    return (
        <div className='grid grid-rows-2 w-full bottom-0 mt-6'>
            <div className='relative row-span-1 flex flex-row justify-between flex-wrap md:flex-nowrap  w-full mx-auto bg-[#393939]'>
                {images.map((image) => (
                    <img src={image.url} className='block w-[197px] h-[160px] md:w-full md:h-[340px] bg-center' alt='footerimg' />
                ))}

            </div>

            <div className='relative row-span-1 flex justify-start items-center w-full bg-[#393939]'>
                <div className='relative w-[25%] h-[300px] flex flex-column justify-center items-center flex-wrap my-6 mx-10'>
                    <img src={logo} alt='logo' />
                    <p className='text-white w-[50%] py-6 mx-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolores. </p>
                    <div className='icons w-[50%] md:flex justify-between gap-1 py-6'>
                        {icons.map(({ item, index }) => (
                            <div className='block icon' key={index}>
                                {item}
                            </div>
                        )
                        )}
                    </div>
                </div>
                <div className='relative  w-[25%]  h-[300px] flex flex-column justify-normal items-normal flex-wrap my-6'>
                <h1 className='w-[250px] border-gradient-red-white'>Photo Gallery</h1>
                <div className='w-[400px] flex justify-start items-center flex-wrap my-10'>
                {images.map((image) => (
                    <img src={image.url} className='block w-[150px] h-[120px] m-1' alt='footerimg' />
                ))}

            </div>

                </div>
                <div className='relative  w-[25%]  flex flex-column justify-normal items-normal flex-wrap my-6'>
                <h1 className='w-[250px] border-gradient-red-white'>About us</h1>

                </div>
                <div className='relative  w-[25%]  flex flex-column justify-normal items-normal flex-wrap my-6'>
                    <img src={logo} alt='logo' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolores. </p>

                </div>

            </div>
        </div>
    );
}

export default Footer;
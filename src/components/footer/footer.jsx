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
    },
    {
        id: 5,
        url: "images/3.png"
    },
   

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
        <footer className='grid grid-rows-2 md:w-full bottom-0 mt-6'>
            <div className='relative row-span-1 flex flex-row justify-start flex-wrap md:w-full min-w-[380px] bg-[#393939]'>
                {images.map((image) => (
                    <img src={image.url} className='block md:w-[420px] w-[120px] h-[80px] md:h-[340px] bg-center' alt='footerimg' />
                ))}

            </div>

            <div className='relative row-span-1 flex md:flex-row flex-column flex-wrap justify-start items-center md:w-full min-w-[400px] bg-[#393939]'>
                <div className='relative md:w-[25%] w-[60%] h-[300px] flex flex-column justify-center items-center flex-wrap my-6 mx-10'>
                    <img src={logo} alt='logo' />
                    <p className='text-white md:w-[50%] w-full py-6 mx-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolores. </p>
                    <div className='icons md:w-[50%] w-full flex md:justify-between justify-around gap-1 py-6'>
                        {icons.map(({ item, index }) => (
                            <div className='block icon' key={index}>
                                {item}
                            </div>
                        )
                        )}
                    </div>
                </div>
            
             
             

            </div>
        </footer>
    );
}

export default Footer;
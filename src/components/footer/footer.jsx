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
        url:"images/3.png"
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
        <footer className='flex flex-column flex-wrap justify-start items-center  md:max-w-full bottom-0 mt-6 bg-[#393939]'>
          <div className='relative flex max-w-screen-sm'>
                {images.map((image) => (
                    <img src={image.url} className='block w-[100px] md:w-auto h-[100px] md:h-[300px] bg-center flex-grow' alt='footerimg' />
                ))}

            </div> 

            <div className='relative flex md:flex-row flex-column flex-wrap justify-start items-start w-full bg-[#393939]'>
                <div className='relative md:w-[300px] w-[50%] h-[300px] flex flex-column justify-between items-center flex-wrap m-auto'>
                     <img src={logo} alt='logo' className='w-[220px]' />
                 
                    <p className='text-white w-full py-1 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolores. </p>
                    <div className='icons w-full flex md:justify-between justify-around gap-1'>
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
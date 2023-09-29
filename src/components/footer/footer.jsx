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
    }
    ,
    {
        id: 6,
        url: "images/1.png"
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


const Tags = [
    {
        name: 'Football',
        colour: 'red-400'
    },
    {
        name: 'Covid 19',
        colour: 'violet-400'
    },
    {
        name: 'Life Style',
        colour: 'yellow-400'
    },
    {
        name: 'Trending',
        colour: 'blue-300'
    },
    {
        name: 'Technology',
        colour: 'green-400'
    },

]
const Footer = () => {
    return (
        <footer className='relative md:h-[400px] w-full flex flex-column flex-wrap justify-center items-start bottom-0 mt-12 bg-[#393939]'>
            {/* <div className='relative flex'>
                {images.map((image) => (
                    <img src={image.url} className='block md:h-auto h-[100px]  bg-center flex-grow' alt='footerimg' />
                ))}

            </div>  */}

            <div className='flex md:flex-row flex-column flex-wrap justify-between items-start w-full bg-[#393939] mx-2'>


                <div className='relative md:w-[18%] w-full h-[300px] flex flex-column justify-center items-center flex-wrap mx-auto mt-10 md:mt-0'>
                    <img src={logo} alt='logo' className='w-[180px]' />

                    <p className='text-white md:w-full w-[70%] py-1 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolores. </p>
                    <div className='icons w-full flex  justify-center gap-4'>
                        {icons.map(({ item, index }) => (
                            <div className='block icon ' key={index}>
                                {item}
                            </div>
                        )
                        )}
                    </div>
                </div>

                <div className='relative  md:w-[18%] first:last: w-full h-[300px] flex flex-column justify-between items-center flex-wrap mx-auto'>
                    <h1 className='title  w-full border-gradient-red-black '>Photo Gallery</h1>
                    <div className='relative flex flex-wrap mx-10 md:mx-0'>
                        {images.map((image) => (
                            <img src={image.url} className='block md:w-[30%] w-[22%] h-[100px] m-1 bg-center flex-grow' alt='footerimg' />
                        ))}

                    </div>
                </div>

                <div className='relative  md:w-[18%] w-full h-[200px] flex flex-column justify-center items-center flex-wrap mx-auto'>
                    <h1 className='title w-full border-gradient-red-black '>Tags</h1>
                    <div className='relative flex flex-wrap mx-10 md:mx-0'>
                        {Tags.map((tag) => (
                            <div className={`bg-${tag.colour}  px-4 py-1 m-2  text-white`} key={tag.name}> {tag.name}  </div>
                        ))}

                    </div>
                </div>

                <div className='relative md:w-[18%] w-full h-[200px] flex flex-column justify-center items-center flex-wrap mx-auto'>
                <h1 className='title w-full border-gradient-red-black '>Stay in Touch</h1>
                    <div className='flex flex-col items-start justify-between mb-10 md:mb-0'>
                        <input className='w-[300px] h-[40px] my-2 bg-white text-slate-950 text-xs text-center' placeholder='Your email address' ></input>
                        <button className='w-[300px] h-[40px] bg-red-500 text-white hover:bg-red-900'> Subscribe</button>

                    </div>
                </div>
         

         

        </div>
        </footer >
    );
}

export default Footer;
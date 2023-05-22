import React, { useEffect, useState } from 'react';
import { TiWeatherSunny } from 'react-icons/ti'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'



const NavbarTop = () => {

    const [date, setDate] = useState();
    const [day, setDay] = useState('');

    const getDate = () => {
        const dayandTime = new Date();
        setDate(dayandTime.toISOString().slice(0, 10));
        setDay(dayandTime.toLocaleString('en-us', { weekday: 'long' }));
    }



    useEffect(() => {
        getDate();
    }, [])



    const icons = [
        {
            item: <BsFacebook size={22} className='bg-blue-600 text-white p-1 rounded-full cursor-pointer' />
        },
        {
            item: <BsTwitter size={22} className='bg-cyan-600 text-white p-1 rounded-full cursor-pointer' />
        },
        {
            item: <FaInstagramSquare  size={22} className='bg-fuchsia-600 text-white p-1 rounded-full cursor-pointer' />
        },
        {
            item: <BsYoutube size={22} className='bg-red-500 text-white p-1 rounded-full cursor-pointer'/>
        },
    ]

  

    return (
        <div className='absolute h-10 md:px-20 w-full top-0 border-b-2 shadow-md flex flex-row justify-around items-center text-xs overflow-hidden'>
            <div className='mx-2 flex justify-between items-center text-[#393939]'>
                <p className='flex mx-1'>
                    <span className='px-1 pt-0.5'>
                        <TiWeatherSunny />
                    </span>
                    <span className='px-1'>
                        18C
                    </span>
                    <span className='px-1'>
                        Alexandria
                    </span>
                </p>

                <p className='flex mx-4'>
                    <span className='px-1 pt-0.5'>
                        <AiOutlineClockCircle />
                    </span>
                    <span>
                        {day} ,
                    </span>
                    <span>
                        {date}
                    </span>
                </p>


                <div className='breakingNews flex justify-between items-center'>
                    <h1 className='bg-red-500 h-10 text-white p-3'>
                        Breaking News
                    </h1>
                    <p className='px-1'>
                        Lorem ipsum dolor sit amet consectetur
                    </p>

                </div>
            </div>

            <div className='icons flex justify-between gap-2 items-center mx-15'>
                {icons.map(({item, index}) => (
                    <div key={index}>
                        {item}
                    </div>

                )
                )}
            </div>


        </div>

    );
}

export default NavbarTop;
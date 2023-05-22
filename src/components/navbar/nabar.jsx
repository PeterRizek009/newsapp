import React, { useEffect, useState } from 'react';
import { TiWeatherSunny } from 'react-icons/ti'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'


const Navbar = () => {

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



    const icons = [<BsFacebook size={20} className='text-blue-500'/>, <BsTwitter size={20} className='text-cyan-600'/>, <BsInstagram size={20} className='text-red-900'/>, <BsYoutube size={20} className='text-red-500'/>]




    return (
        <div className='absolute h-10 md:px-20 w-full top-0 border-b-2 shadow-md flex flex-row justify-around items-center text-xs overflow-hidden'>
            <div className='mx-2  flex justify-between items-center text-[#393939]'>
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
                    <h1 className='bg-red-400 h-10 text-white p-3'>
                        Breaking News
                    </h1>
                    <p className='px-1'>
                        Lorem ipsum dolor sit amet consectetur
                    </p>

                </div>
            </div>

            <div className='icons flex justify-between gap-2 items-center mx-15'>
                {icons.map((item) => (
                    <div>
                        {item}
                    </div>
                )
                )}
            </div>


        </div>

    );
}

export default Navbar;
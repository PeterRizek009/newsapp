import React, { useEffect, useState, useContext } from 'react';
import { TiWeatherSunny } from 'react-icons/ti'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'
import { UserContext } from '../../App'
import { motion } from "framer-motion";

const NavbarTop = ({ day, date }) => {

    const data = useContext(UserContext);


    const [index, setIndex] = useState(0)


    useEffect(() => {
        const delay = 4000; // Delay in milliseconds

        const timeoutId = setTimeout(() => {
            (index === data.length - 1) ?
                setIndex(0)
                :
                setIndex(index + 1)
        }, delay);

        return () => clearTimeout(timeoutId);

    },)



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
        <div className='absolute w-full md:min-w-[1200px]  h-12  md:h-10 md:px-4  top-0 border-b-1 shadow-md flex flex-row  justify-between items-center text-xs bg-white text-black'>
            <div className='md:mx-2 flex justify-between items-center '>
                <p className='hidden md:flex md:mx-1'>
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

                <p className='hidden w-[150px] md:flex md:mx-1'>
                    <span className='px-1 pt-0.5'>
                        <AiOutlineClockCircle />
                    </span>
                    <span className='px-1'>
                        {day}
                    </span>
                    <span>
                        {date}
                    </span>
                </p>


                <div className='breakingNews flex justify-between items-center'>
                    <h1 className='bg-red-500  w-[110px] h-12 md:h-10 text-white p-3'>
                        Breaking News
                    </h1>
                    <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{
                        duration: '0.7',
                        delay: '1'
                    }} className='px-1 truncate w-[250px] md:w-[350px]'>
                        {(data[index].description)}
                    </motion.h4>

                </div>
            </div>

            <div className='icons flex justify-between gap-2 md:mr-36'>
                {icons.map(({ item, index }) => (
                    <div className='block icon' key={index}>
                        {item}
                    </div>
                )
                )}
            </div>


        </div>

    );
}

export default NavbarTop;
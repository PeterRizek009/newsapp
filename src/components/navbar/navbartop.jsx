import React, { useEffect, useState, useContext } from 'react';
import { TiWeatherSunny } from 'react-icons/ti'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'
import { UserContext } from '../../App'
import { motion } from "framer-motion";

const NavbarTop = () => {

    const data = useContext(UserContext);



    const [date, setDate] = useState();
    const [day, setDay] = useState('');
    const [index, setIndex] = useState(0)

    const getDate = () => {
        const dayandTime = new Date();
        setDate(dayandTime.toISOString().slice(0, 10));
        setDay(dayandTime.toLocaleString('en-us', { weekday: 'long' }));
    }



    useEffect(() => {
        getDate();
    }, [])


    useEffect(() => {
        setInterval(() => {
            (index === data.length - 1) ?
                setIndex(0)
                :
                setIndex(index + 1)
        }, 50000);
    },)




    const icons = [
        <BsFacebook size={22} className='bg-blue-600 text-white p-1 rounded-full cursor-pointer' />
        ,
        <BsTwitter size={22} className='bg-cyan-600 text-white p-1 rounded-full cursor-pointer' />
        ,
        <FaInstagramSquare size={22} className='bg-fuchsia-600 text-white p-1 rounded-full cursor-pointer' />
        ,
        <BsYoutube size={22} className='bg-red-500 text-white p-1 rounded-full cursor-pointer' />
    ]





    return (
        <div className='absolute w-full md:min-w-[1200px]  h-12  md:h-10 md:px-4  top-0 border-b-1 shadow-md flex flex-row  justify-between items-center text-xs '>
            <div className='md:mx-2 flex justify-between items-center text-[#393939]'>
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
                    <h1 className='bg-red-500  w-[90px] h-12 md:h-10 text-white p-3'>
                        Breaking News
                    </h1>
                    <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{
                        duration: '0.5',
                        delay: '0.5'
                    }} className='px-1 truncate w-[250px] md:w-[350px]' key={index}>
                        {(data[index].description)}
                    </motion.h4>

                </div>
            </div>

            <div className='icons flex justify-between gap-2'>
                {icons.map(({ item, index }) => (
                    <div key={index} className='icon'>
                        {item}
                    </div>
                )
                )}
            </div>


        </div>

    );
}

export default NavbarTop;
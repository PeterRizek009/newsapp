import React, { useEffect, useState, useContext } from 'react';
import { TiWeatherSunny } from 'react-icons/ti'
import { AiOutlineClockCircle } from 'react-icons/ai'

import { UserContext } from '../../App'


const NavbarTop = ({ day, date, icons }) => {

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





    return (
        <div className='fixed w-full md:min-w-[1200px] h-12 md:h-10 md:px-4 z-50 top-0 border-b-1 shadow-md flex flex-row  justify-start md:justify-around items-center text-xs bg-neutral-800 text-white'>
            <div className='md:mx-2 flex justify-between items-center '>
                <p className='hidden md:flex md:mx-1'>
                    <span className='px-1  text-orange-500'>
                        <TiWeatherSunny size={18} />
                    </span>
                    <span className='px-1'>
                        30°C
                    </span>
                    <span className='px-1'>
                        Alexandria
                    </span>
                </p>

                <p className='hidden w-[220px] md:flex md:mx-1'>
                    <span className='px-1  text-orange-500'>
                        <AiOutlineClockCircle size={18} />
                    </span>
                    <span className='px-1'>
                        {day}
                    </span>
                    <span>
                        {date}
                    </span>
                </p>


                <div className='breakingNews flex justify-between items-center '>
                    <h1 className='bg-red-500 w-[110px] h-12 md:h-10 text-white p-3'>
                        Breaking News
                    </h1>
                    <h4 className='px-1 truncate w-[250px] md:w-[350px] lg:w-[600px] rotating-text'
                    >
                        {(data[index].description)}
                    </h4>

                </div>
            </div>

            <div className='icons hidden md:flex justify-between gap-2 '>
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
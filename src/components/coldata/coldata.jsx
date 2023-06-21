import React from 'react';
import { Link } from 'react-router-dom';

export const ColData = ({ a, b, data }) => {


    return (
        (data.slice(a, b)).map((item, index) => (
            <div className='relative w-[380px] my-4 md:my-2 h-full flex flex-row items-start md:justify-between' key={index}>
                <div className='relative block w-[90px] h-[70px] px-2  bg-cover  bg-center' style={{ backgroundImage: `url(${item.urlToImage})` }}>
                </div>
                <div className='w-[300px] px-2'>
                    <Link to={item.url}>
                        <h1 className='text-sm  text-neutral-500'>{(item.title).slice(0, 50)}</h1>
                    </Link>
                    <h1 className='text-md text-red-900'>{item.author}</h1>
                </div>
            </div>

        ))
    )
}

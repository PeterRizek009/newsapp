import React from 'react';
import { Link } from 'react-router-dom';

export const ColData = ({a , b , data }) => {


    return (
        (data.slice(a, b)).map((item, index) => (
            <div className='relative my-4 md:m-0 h-full flex flex-row items-start md:justify-start' key={index}>
                <div className='relative block w-[85px] h-[70px] px-2  bg-cover  bg-center' style={{ backgroundImage: `url(${item.urlToImage})` }}>
                </div>
                <div className='w-[300px] px-2'>
                    <h1 className='text-md'>{item.author}</h1>
                    <Link to={item.url}>
                        <h1 className='py-1 text-sm  text-neutral-500'>{(item.title).slice(0,50)}</h1>
                    </Link>
                </div>
            </div>

        ))
    )
}

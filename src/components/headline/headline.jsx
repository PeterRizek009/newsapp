import React from 'react';
import { Link } from 'react-router-dom';



const Headlines = ({ data }) => {


    const renderHeadline = (index) => {
        return (
            <div className='absolute bottom-[5%] flex flex-col items-start  px-4 text-red-500'>
                <div className='flex justify-between text-sm md:text-lg py-2'>
                    <h1>
                        {data[index].author}
                    </h1>
                </div>
                <Link to={data[index].url}>
                    <h2 className='text-lg  text-white md:text-md cursor-pointer hover:underline animate__rubberBand'>{data[index].title}</h2>
                </Link>
            </div>
        )
    }


    return (

        <section className='grid grid-cols-2 grid-rows-3 md:grid-cols-4 md:grid-rows-2 py-4  gap-2 md:w-[1400px] md:mx-auto h-[750px] md:h-[700px]'>

            <div className='relative col-span-2 row-span-1  md:row-span-2 bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url(${data[0].urlToImage})` }}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900"></div>
                {renderHeadline(1)}
            </div>
            <div className='relative col-span-1 row-span-1 bg-cover bg-center' style={{ backgroundImage: `url(${data[1].urlToImage})` }}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900"></div>
                {renderHeadline(1)}
            </div>
            <div className='relative col-span-1 row-span-1 bg-cover bg-center' style={{ backgroundImage: `url(${data[2].urlToImage})` }}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900"></div>
                {renderHeadline(2)}
            </div>

            <div className='relative col-span-2 row-span-1 md:row-span-1 bg-cover bg-center' style={{ backgroundImage: `url(${data[50].urlToImage})` }}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900"></div>

                {renderHeadline(50)}
            </div>
        </section>

    );
}

export default Headlines;
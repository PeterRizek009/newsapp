import React, { useContext } from 'react';
import { UserContext } from '../../App'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { Link } from 'react-router-dom';

const Entertainment = () => {


    const data = useContext(UserContext);


    const renderSlide = () => {
        return (
            (data.slice(40, 43)).map((item, index) => (
                <div className='relative h-[100px] flex  justify-between items-start ' key={index}>
                    <div className='block w-[150px] h-[100px] mx-1 bg-center bg-cover' style={{ backgroundImage: `url(${item.urlToImage})` }}>
                    </div>
                    <div className='px-2'>
                        <h1 className='text-xs text-neutral-500 py-2'>{item.author}</h1>
                        <Link to={item.url}>
                            <h1 className='text-md  w-3/4'>{item.title}</h1>
                        </Link>
                    </div>
                </div >

            ))
        )
    }

return (
    <section className='md:w-[1200px] md:mx-auto '>
        <div className='flex justify-between items-start border-black border-b-2 p-2'>
            <h1 className='text-red-500 text-2xl w-full '>Entertainment</h1>
            <div className='flex '>
                <button type="button" className="mr-2 bg-red-600 text-white p-1 rounded hover:bg-gray-500">
                    <GrPrevious />
                </button>
                <button type="button" className=" bg-red-600 text-white p-1 rounded hover:bg-gray-500">
                    <GrNext />
                </button>
            </div>
        </div>

        <div className='md:w-[1200px] flex flex-col justify-start'>
            <div className='relative w-full h-[500px] bg-cover bg-center object-cover my-6' style={{ backgroundImage: `url(${data[24].urlToImage})` }}>
                <div className='absolute bottom-[30%]  flex flex-col items-start  px-8 text-red-500'>
                    <div className='flex justify-between text-sm md:text-lg py-3'>
                        <Link to={data[24].url}>
                            <h1 className='mb-6'>
                                {data[24].title}
                            </h1>
                        </Link>
                    </div>
                    <p className='text-md text-white md:text-xl cursor-pointer hover:underline'>{data[24].description}</p>
                </div>
            </div>
            <div className='w-full h-full flex flex-row justify-between my-4'>
                {renderSlide()}
            </div>

        </div>
    </section >
);
}

export default Entertainment;
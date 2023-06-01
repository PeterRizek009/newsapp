import React, { useContext, useState } from 'react';
import { UserContext } from '../../App'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"


const Entertainment = () => {

    const data = useContext(UserContext);

    const [index, setIndex] = useState(0)


    const slider = [
        {
            id: 0,
            image: data[40].urlToImage,
            author: data[40].author,
            description: data[40].description,
            title: data[40].title,
        },
        {
            id: 1,
            image: data[46].urlToImage,
            author: data[46].author,
            description: data[46].description,
            title: data[46].title,
        },
        {
            id: 2,
            image: data[39].urlToImage,
            author: data[39].author,
            description: data[39].description,
            title: data[39].title,
        }
    ];


    const renderSlide = () => {
        return (
            (slider).map((item) => (
                <div className={item.id === index ? 'items border-red-500 transition-all duration-300 ease-in-out'
                    : 'items border-gray-100'} key={item.id}>
                    <div className='absolute w-[120px] h-[80px] my-auto md:h-[90px] bg-cover bg-center block mx-1 inset-0' style={{ backgroundImage: `url(${item.image})` }}></div>


                    <div className='p-1 ml-32'>
                        <h1 className='text-xs text-neutral-500'>{item.author}</h1>
                        <Link to={item.url}>
                            <p className='text-sm w-full'>{item.title}</p>
                        </Link>
                    </div>
                </div >

            ))
        )
    }



    return (
        <section className='md:w-[1200px] md:mx-auto '>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} >
                <div className='flex justify-between items-start border-black border-b-2 p-2'>
                    <h1 className='text-red-500 text-2xl w-full '>Entertainment</h1>
                    <div className='flex '>
                        <button type="button" className="mr-2 bg-red-600 text-white p-1 rounded hover:bg-gray-500" onClick={() => index === 0 ? setIndex(slider.length - 1) : setIndex(index - 1)}>
                            <GrPrevious />
                        </button>
                        <button type="button" className=" bg-red-600 text-white p-1 rounded hover:bg-gray-500" onClick={() => index === 0 ? setIndex(slider.length - 1) : setIndex(index - 1)}>
                            <GrNext />
                        </button>
                    </div>
                </div>
            </motion.div>
            <div className='md:w-[1200px] flex flex-col justify-start' >
                <div className='relative w-full h-[550px] object-cover bg-center block my-6 inset-0' style={{ backgroundImage: `url(${slider[index].image})` }}>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900"></div>
                    <div className='absolute bottom-[15%]  flex flex-col items-start  px-8 text-red-500'>
                        <div className='flex justify-between text-sm md:text-lg py-3'>
                            <Link to={slider[index].url}>
                                <h1 className='mb-6'>
                                    {slider[index].title}
                                </h1>
                            </Link>
                        </div>
                        <p className='text-md text-white md:text-xl cursor-pointer hover:underline'>{slider[index].description}</p>
                    </div>
                </div>

                <div className='w-full h-full flex md:flex-row  md:justify-between md:items-center flex-col justify-start items-start my-2'>
                    {renderSlide()}
                </div>

            </div>
        </section >
    );
}

export default Entertainment;
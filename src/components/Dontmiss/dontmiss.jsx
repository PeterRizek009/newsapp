import React, { useContext } from 'react';
import { UserContext } from '../../App'
import { Link } from 'react-router-dom';
import TabContainer from '../tabs/tabs';

const DontMiss = () => {

    const data = useContext(UserContext);



    const renderDontMiss = () => {
        return (
            (data.slice(25, 30)).map((item, index) => (
                <div className='h-full flex flex-row items-start justify-start' key={index}>
                    <div className='w-[80px] h-[70px] px-2 bg-center bg-cover' style={{ backgroundImage: `url(${item.urlToImage})` }}>
                    </div>
                    <div>
                        <h1 className='px-2 text-xs'>{item.author}</h1>
                        <Link to={item.url}>
                            <h1 className='px-2 text-md text-neutral-500'>{item.title}</h1>
                        </Link>
                    </div>
                </div>

            ))
        )
    }


    return (
        <div className='md:w-[1200px] md:mx-auto'>
            <h1 className='text-red-500 text-2xl py-3 border-b-2 w-full border-black'>Don't Miss</h1>
            <section className='grid grid-cols-3 gap-4 py-4 md:w-[1200px] md:mx-auto h-[570px]'>
                <div className='col-span-1'>
                    <div className='relative h-[300px] w-full  py-4 bg-cover bg-center' style={{ backgroundImage: `url(${data[6].urlToImage})` }}>
                    </div>
                    <div className='w-full flex flex-row flex-wrap'>
                        <div className='w-full flex  justify-start m-2'>
                            <h1 className='mx-1' >{data[6].author}</h1>
                            <h1>{data[6].publishedAt}</h1>
                        </div>
                        <h1 className='m-2'>{data[6].title}</h1>
                        <p className='m-2  text-sm text-neutral-400'>{data[6].content}</p>
                    </div>
                </div>
                <div className='col-span-1 flex flex-col justify-start'>
                    {renderDontMiss()}
                </div>



                <div className='col-span-1 flex flex-col justify-start'>
                     <TabContainer/>    
                </div>


            </section>
        </div>
    );
}

export default DontMiss;
import React, { useContext } from 'react';
import { UserContext } from '../../App'
import { Link } from 'react-router-dom';

const DontMiss = () => {

    const data = useContext(UserContext);



    const renderDontMiss = () => {
        return (
            (data.slice(7, 12)).map((item) => (
                    <div className='row-span-1  flex flex-row items-start py-2' key={item.author}>
                        <div className='w-[90px] h-[70px] p-2 bg-cover' style={{ backgroundImage: `url(${item.urlToImage})` }}>
                        </div>
                        <div>
                            <h1 className='m-2 text-xs'>{item.author}</h1>
                            <Link to={item.url}>
                            <h1 className='m-2 text-md text-neutral-500'>{item.title}</h1>
                            </Link>
                        </div>
                    </div>
             
            ))
        )
    }


    return (
        <div className='md:w-[1200px] md:mx-auto'>
            <h1 className='text-red-500 text-2xl py-3 border-b-2 w-full border-black'>Don't Miss</h1>
            <section className='grid grid-cols-3 grid-rows-[150px_minmax(200px,_1fr)_100px]  gap-4 py-4 md:w-[1200px] md:mx-auto h-[570px]'>
                <div className='col-span-1'>
                    <div className='relative h-[300px] w-full row-span-3 py-4 bg-cover' style={{ backgroundImage: `url(${data[6].urlToImage})` }}>
                    </div>
                    <div className='w-full flex flex-row flex-wrap'>
                        <div className='w-full flex row-span-1 justify-start m-2'>
                            <h1 className='mx-1' >{data[6].author}</h1>
                            <h1>{data[6].publishedAt}</h1>
                        </div>
                        <h1 className='m-2 row-span-1'>{data[6].title}</h1>
                        <p className='m-2 row-span-1 text-sm text-neutral-400'>{data[6].content}</p>
                    </div>
                </div>
                <div className='col-span-1 flex flex-col justify-between'>
                {renderDontMiss()}
                </div>
            </section>
        </div>
    );
}

export default DontMiss;
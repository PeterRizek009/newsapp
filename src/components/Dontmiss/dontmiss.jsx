import React, { useContext } from 'react';
import { UserContext } from '../../App'

const DontMiss = () => {

    const data = useContext(UserContext);




    return (
        <div className='md:w-[1200px] md:mx-auto'>
            <h1 className='text-red-500 text-2xl py-2 border-b-2 w-full border-black'>Don't Miss</h1>
            <section className='grid grid-cols-3 grid-rows-6 gap-2 py-4 md:w-[1200px] md:mx-auto h-[570px]'>
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

            </section>
        </div>
    );
}

export default DontMiss;
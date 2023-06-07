import React, { useContext } from 'react';
import { UserContext } from '../../App'
import { Link } from 'react-router-dom';



const LifeStyle = () => {

    const data = useContext(UserContext);




    const colDats = (a, b) => {
        return (
            (data.slice(a, b)).map((item, index) => (
                <div className='relative my-2 h-[100px] flex flex-row items-start justify-between' key={index}>
                    <div className='absolute block w-[80px] h-[80px] px-2 bg-center bg-cover' style={{ backgroundImage: `url(${item.urlToImage})` }} >
                    </div>
                    <div className='min-w-[300px] ml-20 px-2'>
                        <h1 className='text-xs'>{item.author}</h1>
                        <Link to={item.url}>
                            <h1 className='py-1 text-sm  text-neutral-500'>{item.title}</h1>
                        </Link>
                    </div>
                </div>

            ))
        )
    }

    const getHead = (a) => {
        return (
        <>
            <div className='relative h-[290px] w-full py-2 bg-cover bg-center' style={{ backgroundImage: `url(${data[a].urlToImage})` }}>
            </div>
            <div className='w-full h-auto flex flex-row flex-wrap'>
                <div className='w-full flex  justify-start m-2'>
                    <h1>{data[a].author}</h1>
                    <h1>{data[a].publishedAt}</h1>
                </div>
                <Link to={data[a].url}>
                    <h1 className=' text-neutral-400'>{data[a].title}</h1>
                </Link>
            </div>
        </>
        )
    }



    return (
        <div className='md:w-[1200px] md:mx-auto mt-6'>
            <h1 className='title md:w-[800px] border-gradient-red-black '>Life Style</h1>
            <section className='grid md:grid-cols-3 gap-4 py-4 md:w-[1200px] md:mx-auto md:h-auto'>
                <div className='col-span-1'>
                       {getHead(60)}
                    <div className='flex flex-col m-4  md:my-2 justify-start'>
                        {colDats(61, 63)}
                    </div>
                </div>

                <div className='col-span-1'>
                       {getHead(80)}
                    <div className='flex flex-col m-4  md:my-2 justify-start'>
                        {colDats(65, 67)}
                    </div>
                </div>

                <div className='col-span-1'>
                    <div className='flex flex-col items-center justify-center w-[300px] h-[220px] mx-auto bg-neutral-300 font-bold shadow-sm'>
                        <h1>Get latest Updates</h1>
                        <input className='w-[220px] h-[40px] my-4 bg-white text-slate-950 text-xs text-center' placeholder='Your email address' ></input>
                        <button className='w-[220px] h-[40px] bg-red-500 text-white hover:bg-red-900'> Subscribe</button>

                    </div>
                  
                    
                    
                </div>
            </section>
        </div>


    );
}

export default LifeStyle;
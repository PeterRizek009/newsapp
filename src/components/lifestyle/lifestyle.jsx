import React, { useContext } from 'react';
import { UserContext } from '../../App'
import { Link } from 'react-router-dom';
import AccordionData from '../accordion/accordion';



const LifeStyle = () => {

    const data = useContext(UserContext);




    const colDats = (a, b) => {
        return (
            (data.slice(a, b)).map((item, index) => (
                <div className='relative h-[100px] sm:w-[350px] flex flex-row items-start justify-between' key={index}>
                    <div className='relative block w-[85px] h-[70px] p-1 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${item.urlToImage})` }} >
                    </div>
                    <div className='w-full mx-2'>
                        <h1 className='text-xs'>{item.author}</h1>
                        <Link to={item.url}>
                            <h1 className='truncate w-[280px]  text-sm  text-neutral-500'>{(item.title)}</h1>
                        </Link>
                    </div>
                </div>

            ))
        )
    }

    const getHead = (a) => {
        return (
            <>
                <div className='relative h-[290px] md:w-full  sm:w-[350px]  py-2 bg-cover bg-center' style={{ backgroundImage: `url(${data[a].urlToImage})` }}>
                </div>
                <div className='w-full h-auto  flex flex-row flex-wrap p-2'>
                    <div className='w-full flex  justify-start '>
                        <h1 >{data[a].author}</h1>
                    </div>
                    <Link to={data[a].url}>
                        <h1 className='w-[300px] h-[5  0px] text-neutral-400 text-sm'>{(data[a].title).slice(0, 58)}</h1>
                    </Link>
                </div>
            </>
        )
    }



    return (
        <div className='md:w-[1400px] md:mx-auto mt-6'>
            <h1 className='title md:w-[1200px] w-full border-gradient-red-black '>Life Style</h1>
            <section className='grid md:grid-cols-3 gap-4 py-4 md:w-[1400px] md:mx-auto md:h-auto'>
                <div className='col-span-1'>
                    {getHead(60)}
                    <div className='flex flex-col  md:my-2 justify-start p-2'>
                        {colDats(61, 64)}
                    </div>
                </div>

                <div className='col-span-1'>
                    {getHead(80)}
                    <div className='flex flex-col  md:my-2 justify-start p-2'>
                        {colDats(65, 68)}
                    </div>
                </div>



                <div className='col-span-1  md:mx-auto'>
                    <div className='flex flex-col items-center justify-center md:w-full h-[280px] w-[380px]  bg-neutral-300 font-bold shadow-md'>
                        <h1>Get latest Updates</h1>
                        <input className='w-[220px] h-[40px] my-4 bg-white text-slate-950 text-xs text-center' placeholder='Your email address' ></input>
                        <button className='w-[220px] h-[40px] bg-red-500 text-white hover:bg-red-900'> Subscribe</button>

                    </div>


                    <AccordionData data={data}/>
                </div>
            </section>
        </div>


    );
}

export default LifeStyle;
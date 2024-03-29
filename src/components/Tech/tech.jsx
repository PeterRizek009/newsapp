import React, { useContext } from 'react';
import { UserContext } from '../../App'
import { Link } from 'react-router-dom';
import { FaInstagramSquare } from 'react-icons/fa'
import { BsFacebook, BsTwitter, BsYoutube, BsBrowserEdge, BsTiktok } from 'react-icons/bs'
import { ColData } from '../coldata/coldata';

const Tech = () => {

    const icons = [
        {
            item:
                <div className='iconBox bg-blue-500' >
                    <BsFacebook size={30} className='bg-blue-800 text-white p-1 rounded-full cursor-pointer' />
                    <div className='text-[10px] text-white'>
                        <h1>1000</h1>
                        <h1>Followers</h1>
                    </div>
                </div>
        },
        {
            item:
                <div className='iconBox bg-cyan-600' >
                    <BsTwitter size={30} className='bg-cyan-800 text-white p-1 rounded-full cursor-pointer' />
                    <div className='text-[10px] text-white '>
                        <h1>1000</h1>
                        <h1>Followers</h1>
                    </div>
                </div>
        },
        {
            item:
                <div className='iconBox bg-fuchsia-600' >
                    <FaInstagramSquare size={30} className='bg-fuchsia-800 text-white p-1 rounded-full cursor-pointer' />
                    <div className='text-[10px] text-white '>
                        <h1>1000</h1>
                        <h1>Followers</h1>
                    </div>
                </div>

        },
        {
            item:
                <div className='iconBox bg-red-500 ' >
                    <BsYoutube size={30} className='bg-red-800 text-white p-1 rounded-full cursor-pointer' />
                    <div className='text-[10px] text-white '>
                        <h1>1000</h1>
                        <h1>subscribers</h1>
                    </div>
                </div>
        },
        {
            item:
                <div className='iconBox bg-violet-500' >
                    <BsBrowserEdge size={30} className='bg-violet-600 text-white p-1 rounded-full cursor-pointer' />
                    <div className='text-[10px] text-white '>
                        <h1>1000</h1>
                        <h1>subscribers</h1>
                    </div>
                </div>
        },
        {
            item:
                <div className='iconBox bg-gray-700' >
                    <BsTiktok size={30} className='bg-black text-red-500 p-1 rounded-full cursor-pointer' />
                    <div className='text-[10px] text-white '>
                        <h1>1000</h1>
                        <h1>subscribers</h1>
                    </div>
                </div>
        }

    ]

    const data = useContext(UserContext);


    // const renderDontMiss = () => {
    //     return (
    //         (data.slice(50, 55)).map((item, index) => (
    //             <div className='relative my-4 md:m-0 h-full flex flex-row items-start md:justify-start' key={index}>
    //                 <div className='relative block w-[85px] h-[70px] px-2  bg-cover  bg-center' style={{ backgroundImage: `url(${item.urlToImage})` }}>
    //                 </div>
    //                 <div className='w-[300px] px-2'>
    //                     <h1 className='text-xs'>{item.author}</h1>
    //                     <Link to={item.url}>
    //                         <h1 className='py-1 text-sm  text-neutral-500'>{item.title}</h1>
    //                     </Link>
    //                 </div>
    //             </div>

    //         ))
    //     )
    // }




    return (

        <div className='md:w-[1400px] md:mx-auto mt-6'>
            <div className='flex justify-stretch items-center'>
                <h1 className='title md:w-[900px] border-gradient-red-black'>Tech</h1>
                <h1 className='hidden md:block text-red-500 text-lg p-2 border-b-2 w-[380px] md:w-[400px] border-gradient-red-black ml-6 uppercase'>Stay Connected</h1>
            </div>
            <section className='grid md:grid-cols-3 gap-4 py-4 md:w-[1400px] md:mx-auto md:h-[570px]'>
                <div className='col-span-1'>
                    <div className='relative h-[290px] md:w-full  sm:w-[350px]  py-2 bg-cover bg-center' style={{ backgroundImage: `url(${data[49].urlToImage})` }}>
                    </div>
                    <div className='w-full h-auto flex flex-row flex-wrap'>
                        <div className='w-full flex  justify-start m-2'>
                            <h1 className='mx-1'>{data[49].author}</h1>
                            <h1>{data[49].publishedAt}</h1>
                        </div>
                        <Link to={data[49].url}>
                            <h1 className='m-2'>{data[6].title}</h1>
                        </Link>
                        <p className=' m-1 w-[80%] text-sm md:text-md text-neutral-400'>{data[6].content}</p>
                    </div>
                </div>
                <div className='col-span-1 flex flex-col mx-4 my-4 md:m-0 justify-start'>
                    <ColData data={data} a={50} b={55}/>
                </div>

                <div className='col-span-1 flex flex-col justify-start'>
                    <h1 className='title md:hidden p-2 border-b-2  border-gradient-red-black uppercase'>Stay Connected</h1>
                    <div className='social flex justify-start md:ml-2 md:p-0 items-start flex-wrap sm:w-[380px] md:w-full mx-auto sm:p-4'>
                        {icons.map(({ item, index }) => (
                            <div key={index}>
                                {item}
                            </div>
                        )
                        )}
                    </div>
                    <div className='block my-6  md:mx-0'>
                        <img className='block max-w-full max-h-full bg-cover mx-6 md:mx-auto' loading="lazy" src={require("./sideadd.png")} alt='add' />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Tech;
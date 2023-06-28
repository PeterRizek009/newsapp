import React, { useContext } from 'react';
import { UserContext } from '../../App'
import { Link } from 'react-router-dom';
import TabContainer from '../tabs/tabs';
import { ColData } from './../coldata/coldata';

const BusinessInsider = ({ businessData }) => {

    const data = useContext(UserContext);


    return (
        <div className='md:w-[1600px] md:mx-auto'>
            <h1 className='title border-gradient-red-black'>business insider</h1>
            <section className='grid md:grid-cols-3 gap-4 py-4 md:w-[1600px] mx-auto md:h-[570px]'>
                <div className='col-span-1'>
                    <div className='relative h-[290px] w-full py-2 bg-cover bg-center' style={{ backgroundImage: `url(${businessData[9].urlToImage})` }}>
                    </div>
                    <div className='w-full h-auto flex flex-row flex-wrap'>
                        <h1 className='mx-1'>{businessData[9].author}</h1>
                        <Link to={businessData[9].url}>
                            <h1 className='m-2'>{businessData[9].title}</h1>
                        </Link>
                        <p className='m-1 w-[80%] text-sm md:text-md text-neutral-400'>{businessData[9].description}</p>
                    </div>
                </div>
                <div className='col-span-1 flex flex-col mx-4 my-4 md:m-0 justify-start'>
                <ColData data={data} a={42} b={48}/>
                </div>



                <div className='col-span-1 flex flex-col justify-start'>
                    <TabContainer data={data} />
                </div>

            </section>
        </div>
    );
}

export default BusinessInsider;
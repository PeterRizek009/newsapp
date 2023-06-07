import React, { useContext } from 'react';
import { UserContext } from '../../App'
import { Link } from 'react-router-dom';
import TabContainer from '../tabs/tabs';

const BusinessInsider = ({ businessData }) => {

    const data = useContext(UserContext);


    const renderDontMiss = () => {
        return (
            (businessData.slice(1, 5)).map((item, index) => (
                <div className='relative my-6 md:my-0 h-full flex flex-row items-start justify-between ' key={index}>
                    <div className='absolute block w-[80px] h-[70px] px-2 bg-center bg-cover' style={{ backgroundImage: `url(${item.urlToImage})` }}>
                    </div>
                    <div className='min-w-[300px] ml-20'>
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
            <h1 className='title border-gradient-red-black w-full'>business insider</h1>
            <section className='grid md:grid-cols-3 gap-4 py-4 md:w-[1200px] md:mx-auto md:h-[570px]'>
                <div className='col-span-1'>
                    <div className='relative h-[290px] w-full py-2 bg-cover bg-center' style={{ backgroundImage: `url(${businessData[6].urlToImage})` }}>
                    </div>
                    <div className='w-full h-auto flex flex-row flex-wrap'>
                        <h1 className='mx-1'>{businessData[6].author}</h1>
                        <Link to={businessData[6].url}>
                            <h1 className='m-2'>{businessData[6].title}</h1>
                        </Link>
                        <p className='m-2 text-sm md:text-md text-neutral-400'>{businessData[6].content}</p>
                    </div>
                </div>
                <div className='col-span-1 flex flex-col mx-4 my-4 md:m-0 justify-start'>
                    {renderDontMiss()}
                </div>



                <div className='col-span-1 flex flex-col justify-start'>
                    <TabContainer data={data} />
                </div>


            </section>
        </div>
    );
}

export default BusinessInsider;
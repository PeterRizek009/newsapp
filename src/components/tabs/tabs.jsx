import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const TabContainer = ({ data }) => {

    const headerDatar = [
        {
            'name': 'Recent',
            'start': 31
        },
        {
            'name': 'Trending',
            'start': 35
        },
        {
            'name': 'Most Views',
            'start': 40
        }
    ];


    const [toggleTab, setToggleTab] = useState(0)




    const renderHeader = () => {
        return (
            headerDatar.map((item, index) => (
                <li className={toggleTab === index ?
                    "flex-1 border-b-4 border-red-500  animate__animated animate__bounceIn"
                    : "flex-1 border-b-2 border-gray-950 w-[100px]"} key={index}>
                    <div className="relative block p-2">
                        <div className="flex items-center justify-center gap-2 md:gap-4">
                            <span className={toggleTab === index ?
                                "text-red-500 text-sm"
                                : " text-sm text-gray-900 cursor-pointer"} onClick={() => setToggleTab(index)}> {item.name} </span>
                        </div>
                    </div>
                </li>
            ))

        )
    }



    const renderTabsContent = () => {
        return (
            (data.slice(headerDatar[toggleTab].start, (headerDatar[toggleTab].start) + 5)).map((item, index) => (
                <div className='relative h-full flex flex-row items-start justify-start py-5' key={index}>
                    <div className='relative block min-w-[85px] min-h-[60px] my-auto px-2 bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url(${item.urlToImage})` }}>
                    </div>
                    <div className='text-xs px-2'>
                        <h1>{item.author}</h1>
                        <Link to={item.url}>
                            <h1 className='text-md text-neutral-500'>{item.title}</h1>
                        </Link>
                    </div>
                </div>


            ))
        )
    }

    return (
        <div className='block max-w-[400px] md:w-full'>
            <ul className="flex ">
                {renderHeader()}
            </ul>

            <div className='animate-waving my-2 mx-4'>
                {renderTabsContent()}
            </div>


        </div >
    );
}

export default TabContainer;
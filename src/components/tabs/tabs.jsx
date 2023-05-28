import React, { useState } from 'react';


const TabContainer = () => {

    const data = ['Recent', 'Trending', 'Most Views'];

    const [toggleTab , setToggleTab] =  useState(0)

    
  

    const renderHeader = () => {
        return (
            data.map((item , index) => (
                <li className={toggleTab === index ?
                    "flex-1 border-b-2 border-red-500"
                    : "flex-1 border-b-2 text-gray-700"}>
                    <a className="relative block p-2 " href>
                        <div className="flex items-center justify-center gap-4">
                            <span className={toggleTab === index ?
                            "text-red-500 text-sm"
                            : "text-sm text-gray-900 font-bold cursor-pointer"} onClick={() => setToggleTab(index)}> {item} </span>
                        </div>
                    </a>
                </li>
            ))

        )
    }

    return (
        <ul className="flex ">
               {renderHeader()}
         
        </ul>
    );
}

export default TabContainer;
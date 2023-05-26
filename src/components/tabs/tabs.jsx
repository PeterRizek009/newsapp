import React from 'react';


const TabContainer = () => {



    const data = ['Recent', 'Trending', 'Most Views'];

    const renderHeader = () => {
        return (
            data.map((item) => (
                <li className="flex-1">
                    <a className="relative block p-4" href>
                        <div className="flex items-center justify-center gap-4">
                            <span className="text-sm  text-gray-900 font-bold"> {item} </span>
                        </div>
                    </a>
                </li>
            ))

        )
    }

    return (
        <ul className="flex border-b border-black">
               {renderHeader()}
         
        </ul>
    );
}

export default TabContainer;
import React, { useState } from 'react';
import { GrNext } from 'react-icons/gr'
import { ColData } from '../coldata/coldata';

const AccordionItem = ({ title, content , count ,color}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

  

    return (
        <div className="mb-2">
            <div className="accordion-header w-[380px] flex justify-between items-center py-2 px-1 cursor-pointer" onClick={toggleAccordion}>
                <div className='flex justify-start items-center'>
                    <GrNext size={14} />
                    <h4 className="font-semibold mx-2 text-neutral-600">{title}</h4>
                </div>
              
                <div className={`relative block w-[28px] h-[28px] bg-${color} text-white`}>
                    <h3 className='mx-2 my-1 text-sm'>{count}</h3>
                </div>
            </div>
            {isOpen && (
                <div className="accordion-body px-2 my-2">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

const AccordionData = ({ data }) => {
    const accordionData = [
        {
            title: 'Gizmodo.com',
            content: <ColData a={1} b={4} data={data} />,
            count : 3,
            color : 'pink-500',
        },
        {
            title: 'Wired',
            content: <ColData a={97} b={101} data={data} />,
            count : 3,
            color : 'green-400',
        },
        {
            title: 'The Verge',
            content: <ColData a={15} b={18} data={data} />,
            count : 4,
            color : 'blue-400',
        },
        {
            title: 'BBC News',
            content: <ColData a={20} b={22} data={data} />,
            count : 2,
            color : 'red-400',
        },
    ];

    return (
        <div className="max-w-md md:mx-auto mt-5">
            <div className="accordion">
                {accordionData.map((item, index) => (
                    <AccordionItem key={index} title={item.title} content={item.content} count={item.count} color={item.color}/>
                ))}
            </div>
        </div>
    );
};

export default AccordionData;


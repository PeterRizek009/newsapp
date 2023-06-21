import React, { useState } from 'react';
import { GrNext } from 'react-icons/gr'

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mb-2">
            <div className="accordion-header flex justify-start items-center py-2 px-4 cursor-pointer" onClick={toggleAccordion}>
                <GrNext size={14}/>
                <h3 className="font-semibold mx-4">{title}</h3>
            </div>
            {isOpen && (
                <div className="accordion-body px-4">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

const AccordionData = () => {
    const accordionData = [
        {
            title: 'Engadget',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        { title: 'Wired', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
        { title: 'The Verge', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
    ];

    return (
        <div className="max-w-md mx-auto mt-5">
            <div className="accordion">
                {accordionData.map((item, index) => (
                    <AccordionItem key={index} title={item.title} content={item.content} />
                ))}
            </div>
        </div>
    );
};

export default AccordionData;


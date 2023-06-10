import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border border-gray-300 rounded-lg mb-2">
            <div className="accordion-header py-2 px-4" onClick={toggleAccordion}>
                <h3 className="font-semibold">{title}</h3>
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
        { title: 'Accordion Item 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { title: 'Accordion Item 2', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
        { title: 'Accordion Item 3', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
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


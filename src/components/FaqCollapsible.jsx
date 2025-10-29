import React, { useState } from 'react';

export default function FaqCollapsible({ ques, ans }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="w-full border-b border-gray-300 py-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between items-center">
                <p className="font-medium text-gray-800">{ques}</p>
                <span
                    className={`
                        text-xl font-bold text-gray-600 transition-transform duration-300
                        ${isOpen ? 'rotate-45 transform' : ''}
                    `}
                >
                    +
                </span>
            </div>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-2' : 'max-h-0'}`}
            >
                <p className="text-gray-600">{ans}</p>
            </div>
        </div>
    );
}
import React, { ReactNode } from 'react';

interface TextProps {
    text: ReactNode;
}

const StatusMessage: React.FC<TextProps> = ({ text }) => {
    return (
        <div className="relative mx-auto flex justify-center border-4 border-rick rounded-md sm:w-96">
            <img src="./notFound.webp" alt="image of item not found" />
            <div className="absolute text-rick sm:w-56 p-5 text-xl ml-6 mr-24 sm:mr-40">
                {text}
            </div>
        </div>
    );
};

export default StatusMessage;

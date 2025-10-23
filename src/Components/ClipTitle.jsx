import React from 'react';

const ClipTitle = ({ title, color, bg, className, borderColor }) => {
    return (
        <div className='general-title'>
            <div
                style={{
                    clipPath: '',
                    borderColor: borderColor
                }}
                className={`${className} border-[0.5vw] text-nowrap`}
            >

                <div 
                style={{
                    color: color,
                    backgroundColor: bg
                }}
                className='p-3 lg:px-14 pb-4 md:pb-7'>
                    <h2 className=''>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default ClipTitle;
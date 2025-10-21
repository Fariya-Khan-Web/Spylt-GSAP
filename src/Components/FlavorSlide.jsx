import React from 'react';
import { flavorlists } from '../../Constants';

const FlavorSlide = () => {
    return (
        <div className='slider-wrapper'>
            <div className='flavors'>
                {
                    flavorlists.map(({ color, rotation, name }, idx) => (
                        <div key={idx} className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${rotation}`}
                        >

                            <img src={`/images/${color}-bg.svg`} alt={`${color}_drink_bg`} className='absolute bottom-0' />

                            <img src={`/images/${color}-drink.webp`} alt="drink" className='drinks' />

                            <img src={`/images/${color}-elements.webp`} alt="elements" className='elements' />

                            <h1>{name}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FlavorSlide;
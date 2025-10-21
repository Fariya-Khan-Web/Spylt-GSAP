import React from 'react';
import { nutrientLists } from '../../Constants';

const Nutrition = () => {
    return (
        <section className='nutrition-section'>
            <img src="/images/slider-dip.png" alt="" className='object-cover w-full' />

            <img src="/images/big-img.png" alt="white-drink" className='big-img' />

            <div className=" flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">


                <div className="relative inline-block md:translate-y-20">
                    <div className="general-title relative flex flex-col justify-center items-center gap-24">

                        <div className='overflow-hidden place-self-start'>
                            <h1 className='nutrition-title'>It still does</h1>
                        </div>


                        <div
                            style={{
                                clipPath: '',
                            }}
                            className='overflow-hidden place-self-start'>
                            <h1 className='nutrition-text-scroll'>body good</h1>
                        </div>

                    </div>
                </div>


                <div className="flex md:justify-center items-center translate-y-5">
                    <div className="md:max-w-xs max-w-md">
                        <p className="text-lg md:text-right text-balance font-paragraph">
                            Milk contains a wide array of nutrients, including vitamins,
                            minerals, and protein, and this is lactose free
                        </p>
                    </div>
                </div>


                <div className="nutrition-box">
                    <div className='list-wrapper'>

                        {
                            nutrientLists.map(({ label, amount }, idx) => (
                                <p key={idx} className='flex flex-col px-16 text-center'>
                                    <p>{label}</p>
                                    Up to
                                    <p>{amount}</p>
                                </p>
                            ))
                        }

                    </div>

                </div>

            </div>

        </section >
    );
};

export default Nutrition;
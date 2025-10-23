import React, { useEffect, useState } from 'react';
import { nutrientLists } from '../../Constants';
import { useMediaQuery } from 'react-responsive';

const Nutrition = () => {

    const [list, setList] = useState(nutrientLists)


    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    useEffect(() => {

        if (isMobile) {
            const newlist = nutrientLists.slice(0, 3)
            setList(newlist)
        }
        else {
            setList(nutrientLists)
        }

    }, [isMobile])


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
                            // style={{
                            //     // clipPath: 'polygon(25% 0%, 25% 0, 0 100%, 0% 100%)',
                            // }}
                            className='nutrition-text-scroll place-self-start'>
                            <div className='bg-mid-brown text-milk-yellow p-2 pb-4 md:p-3 md:pb-6'>
                                <h1>body good</h1>
                            </div>
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
                            list.map(({ label, amount }, idx) => (
                                <p key={idx} className={`flex flex-col overflow-hidden px-8 lg:px-20 ${idx !== list.length - 1 && 'border-r'}`}>
                                    <p className='md:text-xl font-paragraph'>{label}</p>
                                    <p className='mt-2 md:mt-3 font-paragraph'>up to</p>
                                    <p className='md:text-3xl font-bold'>{amount}</p>
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
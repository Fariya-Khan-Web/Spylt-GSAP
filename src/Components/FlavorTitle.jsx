import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React from 'react';

const FlavorTitle = () => {


    useGSAP(() => {
        const titleSplit = SplitText.create('.first-text-split', {
            type: 'chars'
        })
        const title2Split = SplitText.create('.second-text-split', {
            type: 'chars'
        })

        const SplitTL = gsap.timeline({
            scrollTrigger: {
                trigger: '.flavor-section',
                start: 'top 35%',
                end: 'top 5%',
                markers: true,
                scrub: true,
            }
        })

        SplitTL
            .from(titleSplit.chars, {
                opacity: 0,
                yPercent: 20,
                stagger: 0.05,
            })
            .to('.flavor-text-scroll', {
                duration: 0.7,
                clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)',
                ease: 'circ.out'
            }, '-=0.5')
            .from(title2Split.chars, {
                opacity: 0,
                yPercent: 20,
                stagger: 0.05,
            })
    })


    return (
        <div className='general-title col-center h-full gap-10 xl:gap-24 2xl:gap-32 pt-44'>

            <div className='first-text-split overflow-hidden py-3 2xl:py-0'>
                <h1>We have 6</h1>
            </div>

            <div
                style={{
                    clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
                }}
                className='flavor-text-scroll bg-mid-brown p-1 px-5 pb-3 md:pb-5'>
                <div>
                    <h2 className='text-milk'>freaking</h2>
                </div>
            </div>

            <div className='second-text-split overflow-hidden py-3 2xl:py-0'>
                <h1>delicious flavors</h1>
            </div>
        </div>
    );
};

export default FlavorTitle;
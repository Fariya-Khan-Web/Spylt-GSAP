import React from 'react';
import ClipTitle from '../Components/ClipTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Benefits = () => {

    useGSAP(() => {

        const titletl = gsap.timeline({
            scrollTrigger: {
                trigger: '.benefit-section',
                start: 'top 50%',
                end: 'top top',
                scrub: 1.5,
                markers: true
            }
        })

        titletl
            .to('.first-title', {
                opacity: 1,
                duration:0.7,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ease:'circ.out'
            })
            .to('.second-title', {
                opacity: 1,
                duration:0.7,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ease:'circ.out'
            })
            .to('.third-title', {
                opacity: 1,
                duration:0.7,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ease:'circ.out'
            })
            .to('.fourth-title', {
                opacity: 1,
                duration:0.7,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ease:'circ.out'
            })

    }, [])

    return (
        <section className='benefit-section'>
            <div className='container mx-auto pt-20'>
                <div className='col-center'>
                    <p>Unlock the Advantages: <br />Explore the Key Benefits of Choosing SPYLT</p>

                    <div className="mt-34 md:mt-20 col-center">
                        <ClipTitle
                            title={"Shelf stable"}
                            color={"#faeade"}
                            bg={"#c88e64"}
                            className={"first-title"}
                            borderColor={"#222123"}
                        />
                        <ClipTitle
                            title={"Protein + Caffeine"}
                            color={"#222123"}
                            bg={"#faeade"}
                            className={"second-title"}
                            borderColor={"#222123"}
                        />
                        <ClipTitle
                            title={"Infinitely recyclable"}
                            color={"#faeade"}
                            bg={"#7F3B2D"}
                            className={"third-title"}
                            borderColor={"#222123"}
                        />
                        <ClipTitle
                            title={"Lactose free"}
                            color={"#2E2D2F"}
                            bg={"#FED775"}
                            className={"fourth-title"}
                            borderColor={"#222123"}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Benefits;
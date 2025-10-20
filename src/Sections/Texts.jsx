import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React from 'react';

const Texts = () => {

    useGSAP(() => {

        const textSplit = SplitText.create('.first-message', {
            type: 'words'
        })
        const paraSplit = SplitText.create('.detail', {
            type: 'words'
        })

        const textTL = gsap.timeline({
            scrollTrigger: {
                trigger: '.message-content',
                start: 'top center',
                end: 'bottom 85%',
                scrub: true
            }
        })
        textTL
            .to(textSplit.words, {
                color: '#faeade',
                ease: 'bounce.in',
                stagger: 1,
            })
            .from(paraSplit.lines, {
                yPercent: 100,
                stagger: 0.2,
            });



        const revealTL = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: '.msg-text-scroll',
                start: 'top 80%',
                end: 'bottom 60%',
                scrub: true,
            }
        })
        revealTL.to('.msg-text-scroll', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 1,
            ease: 'circ.inOut',
        })


        const paraTL = gsap.timeline({
            scrollTrigger:{
                trigger:'.message-content',
                start: 'bottom 95%',
                end: 'bottom 60%',
                duration: 0.5
            }
        })
        paraTL.from(paraSplit.words, {
            y: 16,
            opacity: 0,
            stagger: 0.05,
            ease:'power1.inOut'
        })

    }, [])



    return (
        <section className='message-content'>
            <div className="container mx-auto retative flex-center py-28">
                <div className="w-full h-full">
                    <div className='msg-wrapper'>
                        <h1 className="first-message">Stir up your fearless past and</h1>

                        <div
                            style={{
                                clipPath: 'polygon(4% 0, 4% 0, 0 100%, 0% 100%)'
                            }}
                            className='msg-text-scroll'>
                            <div className='bg-light-brown px-5 pb-3 md:pb-5'>
                                <h2 className="text-red-brown">Feul Up</h2>
                            </div>
                        </div>

                        <h1 className="first-message">your future with every gulp of Perfect Protein</h1>
                    </div>

                    <div className="flex-center mt-10 md:mt-20">
                        <div className='max-w-md px-10 flex-center overflow-hidden'>
                            <p className='detail'>Rev up your rebel spirit and feed the adventure of life with SPYLT, where you’re one chug away from epic nostalgia and fearless fun.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Texts;
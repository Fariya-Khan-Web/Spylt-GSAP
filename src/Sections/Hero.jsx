import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React from 'react';

const Hero = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create('.hero-title', {
            type: 'chars'
        })

        const t_line = gsap.timeline({
            delay: 0.6
        })

        t_line
            .to('.hero-content', {
                opacity: 1,
                y: 0,
                ease: 'power1.inOut'
            })
            .to('.hero-text-scroll', {
                duration: 0.7,
                clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)',
                ease: 'circ.out'
            })
            .from(titleSplit.chars, {
                yPercent: 100,
                stagger: 0.02,
                ease: 'power1.inOut',
            })


        const heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-container',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })

        heroTl.to('.hero-container', {
            rotate: 8,
            scale: 0.85,
            yPercent:32,
            ease: 'power1.inOut'
        })

    }, [])


    return (
        <section className='bg-main-bg'>
            <div className='hero-container'>
                <img
                    src="/images/static-img.png"
                    alt="static-img"
                    className='absolute bottom-0 left-1/2 -translate-x-1/2 object-auto '
                />
                <div className="hero-content opacity-0">
                    <div className='overflow-hidden'>
                        <h1 className="hero-title">Freaking Delicious</h1>
                    </div>
                    <div
                        style={{
                            clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)'
                        }}
                        className='hero-text-scroll'
                    >
                        <div className='hero-subtitle'>
                            <h1>Protine + caffine</h1>
                        </div>
                    </div>

                    <h2>
                        Live life to the fullest  with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.
                    </h2>

                    <div className='hero-button'>Chung a SPILT</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
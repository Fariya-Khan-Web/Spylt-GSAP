import React, { useRef } from 'react';
import { cards } from '../../Constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Testimonials = () => {

    useGSAP(() => {

        gsap.set('.testimonials-section',{
            marginTop: '-140vh'
        })


        const jumpinTL = gsap.timeline({
            scrollTrigger: {
                trigger: '.testimonials-section',
                start: 'top -30%',
                scrub: true,
                pin: true,
            }
        })
        const textTL = gsap.timeline({
            scrollTrigger: {
                trigger: '.testimonials-section',
                start: 'top 90%',
                scrub: true,
            }
        })

        textTL
            .to('.first-title', {
                xPercent: 50,
                yPercent: 20
            })
            .to('.sec-title', {
                xPercent: 20,
                yPercent: 20
            }, '<')
            .to('.third-title', {
                xPercent: -50,
                yPercent: 20
            }, '<')


        jumpinTL.from('.pin-box div', {
            yPercent: 200,
            stagger: 2.5,
            ease: 'power1.out'
        })

    }, [])


    const videoRef = useRef([])

    const handlePlay = (index) => {
        const video = videoRef.current[index]
        video.play()
    }
    const handlePause = (index) => {
        const video = videoRef.current[index]
        video.pause()
    }

    return (
        <section className='testimonials-section '>
            <div className='title-div absolute size-full flex flex-col items-center pt-[5vw]'>
                <h1 className='first-title'>WHAT'S</h1>
                <h1 className='text-light-brown sec-title'>EVERYONE</h1>
                <h1 className='third-title'>TALKING</h1>
            </div>


            <div className='pin-box'>
                {
                    cards.map(({ src, rotation, name, img, translation }, idx) => (
                        <div key={idx} className={`vd-card ${rotation} ${translation}`}
                            onMouseEnter={() => handlePlay(idx)}
                            onMouseLeave={() => handlePause(idx)}
                        >
                            <video
                                ref={(el) => (videoRef.current[idx] = el)}
                                src={src} muted playsInline loop />
                            <div className='absolute flex bottom-5 left-5 items-center gap-3'>
                                <img src={img} alt="profile" />
                                <h4 className='uppercase text-white font-semibold text-xl'>{name}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>


        </section>
    );
};

export default Testimonials;
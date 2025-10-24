import React, { useRef } from 'react';
import { cards } from '../../Constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

const Testimonials = () => {

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)'
    })

    useGSAP(() => {

        if (!isMobile) {
            gsap.set('.testimonials-section', {
                marginTop: '-150vh'
            })
        }


        const jumpinTL = gsap.timeline({
            scrollTrigger: {
                trigger: '.testimonials-section',
                start: isMobile? "top -65%":'top -39%',
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
            .to('.fst-title', {
                xPercent: 50,
                yPercent: 20
            })
            .to('.sec-title', {
                xPercent: 20,
                yPercent: 20
            }, '<')
            .to('.trd-title', {
                xPercent: -50,
                yPercent: 20
            }, '<')
            .to('.title-div', {
                yPercent: 8
            }, '-=0.5')

        jumpinTL.from('.pin-box div', {
            yPercent: 200,
            stagger: isMobile ? 70 : 3.5,
            duration: isMobile ? 20 : 10,
            ease: 'power1.out'
        })

    }, [isMobile])


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
        <section className='testimonials-section'>
            <div className='title-div absolute size-full flex flex-col items-center pt-[2vw]'>
                <h1 className='fst-title'>WHAT'S</h1>
                <h1 className='text-light-brown sec-title'>EVERYONE</h1>
                <h1 className='trd-title mb-40'>TALKING</h1>
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
                                src={src} muted playsInline loop
                            />
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
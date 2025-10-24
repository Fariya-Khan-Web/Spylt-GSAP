import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const VideoPin = () => {

    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    useGSAP(() => {
        if (!isMobile) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".vd-pin-section",
                    start: "-15% top",
                    end: "250% top",
                    scrub: 1.5,
                    pin: true,
                },
            });

            tl.to(".video-box", {
                clipPath: "circle(100% at 50% 50%)",
                ease: "power1.inOut",
            });
        }
    },[isMobile]);

    return (
        <section className='vd-pin-section '>
            <div
                style={{
                    clipPath: isMobile? 'circle(100% at 50% 50%)':'circle(5% at 50% 50%)' 
                }}
                className='size-full video-box'
            >
                <video src="/videos/pin-video.mp4" playsInline loop muted autoPlay />

                <div className='abs-center'>
                    <img src="/images/circle-text.svg" alt="play-video" className='spin-circle ' />
                    <div className='abs-center p-[2vw] bg-white/20 backdrop-blur-2xl rounded-full'>
                        <img src="/images/play.svg" alt="play-btn" className='size-[3vw] ml-[.5vw]' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoPin;
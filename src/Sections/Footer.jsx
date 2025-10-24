import { useGSAP } from '@gsap/react';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {

    const [mobile, setMobile] = useState(false);

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)'
    })

    useEffect(() => {
        setMobile(isMobile)
    }, [isMobile])

    useGSAP(() => {

    })

    return (
        <footer className='footer-section'>
            <img src="/images/footer-dip.png" alt="" className='object-cover w-full -translate-y-1' />

            <div className='relative pt-[10vh] md:pt-[20vh] 2xl:h-[110dvh]'>
                <div className='overflow-hidden z-10'>
                    <h1 className='general-title text-milk text-center'>
                        #CHUGRESPONSIBLY
                    </h1>
                </div>

                {
                    mobile ?
                        <img src='/images/footer-drink.png' alt='splash image' className='absolute inset-0 w-full object-contain'/>
                        : <video src="/videos/splash.mp4" playsInline muted autoPlay className='absolute inset-0 w-full object-contain mix-blend-lighten z-20' />
                }

                <div className='flex-center py-18 gap-6'>
                    <div className='social-btn'>
                        <img src="/images/yt.svg" alt="yt" />
                    </div>
                    <div className='social-btn '>
                        <img src="/images/insta.svg" alt="insta" />
                    </div>
                    <div className='social-btn'>
                        <img src="/images/tiktok.svg" alt="tiktok" />
                    </div>
                </div>

                <div className='lg:flex lg:justify-between lg:mx-[3vw] md:mx-[2vw] text-milk'>
                    <div className='flex-center gap-4 md:gap-8 text-lg md:text-xl 2xl:text-2xl font-paragraph'>
                        <ul>
                            <li><a href="#">SPYLT Flavors</a></li>
                        </ul>
                        <ul className='space-y-2'>
                            <li><a href="#">Chung Club</a></li>
                            <li><a href="#">Student Marketing</a></li>
                            <li><a href="#">Dairy Dealers</a></li>

                        </ul>
                        <ul className='space-y-2'>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Contacts</a></li>
                            <li><a href="#">Tasty Talk</a></li>
                        </ul>
                    </div>


                    <div className='space-y-5 lg:space-y-10 pt-16 lg:pt-0 mx-[5vw] md:w-[80vh] lg:w-[50vh] lg:mx-4'>
                        <p className='font-paragraph text-base md:text-xl'>Get Exclusive Early Access and Stay Informed About Product Updates, Events, and More!</p>
                        <div className='relative'>
                            <input type="email" placeholder='Enter your email' />
                            <img src="/images/arrow.svg" alt="enter" className='absolute right-0 top-0 translate-y-1/2' />
                        </div>
                    </div>
                </div>

            </div>


            <div className='copyright-box'>
                <p>Copyright © 2025 Spylt - All Rights Reserved</p>
                <p className='flex gap-5'>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Sеrvice</a>
                </p>

            </div>

        </footer>
    );
};

export default Footer;
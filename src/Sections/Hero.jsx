import React from 'react';

const Hero = () => {
    return (
        <section className='bg-main-bg'>
            <div className='hero-container'>
                <img
                    src="/images/static-img.png"
                    alt="static-img"
                    className='absolute bottom-0 left-1/2 -translate-x-1/2 object-auto '
                />
                <div className="hero-content">
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
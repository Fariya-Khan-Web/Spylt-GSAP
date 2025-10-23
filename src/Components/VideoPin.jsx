import React from 'react';

const VideoPin = () => {
    return (
        <section className='vd-pin-section'>
            <div
                style={{
                    clipPath: 'circle(6.3% at 50% 50%)'
                }}
                className='size-full video-box'
            >
                <video src="/videos/pin-video.mp4" playsInline loop muted autoPlay/>

                <div className='abs-center'>
                    <img src="/images/circle-text.svg" alt="play-video" className='spin-circle '/>
                </div>
                <div className='abs-center p-12 bg-white/20 backdrop-blur-2xl rounded-full'>
                    <img src="/images/play.svg" alt="play-btn" className='size-[3vw] ml-[.5vw]'/>
                </div>
            </div>
        </section>
    );
};

export default VideoPin;
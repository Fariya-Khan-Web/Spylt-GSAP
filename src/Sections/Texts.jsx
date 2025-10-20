import React from 'react';

const Texts = () => {
    return (
        <section className='message-content'>
            <div className="container mx-auto retative flex-center py-28">
                <div className="w-full h-full">
                    <div className='msg-wrapper'>
                        <h1 className="first-message">Stir up your fearless past and</h1>
                        
                        <div 
                        
                        className='msg-text-scroll'>
                            <div className='bg-light-brown px-5 pb-3 md:pb-5'>
                                <h2 className="text-red-brown">Feul Up</h2>
                            </div>
                        </div>

                        <h1 className="first-message">your future with every gulp of Perfect Protein</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Texts;
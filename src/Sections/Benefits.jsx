import React from 'react';
import ClipTitle from '../Components/ClipTitle';

const Benefits = () => {
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
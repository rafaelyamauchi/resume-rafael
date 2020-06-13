import React from 'react';

const Hero = () => {
    return (
        <div className="pt-10 md:grid md:grid-cols-2 md:pt-20">
            <div className="pt-16 md:pt-32">
                <h1 className="text-base uppercase font-bold pl-16">Olá, eu sou</h1>
                <h1 className="text-2xl md:text-4xl uppercase text-yellow-400 font-bold pl-16">Rafael Yamauchi</h1>
                <p className="text-sm uppercase pl-16">Software Developer</p>
            </div>
            <div>
                <img src="/images/home-office.png"></img>
            </div>
        </div>
    );
}

export default Hero;
import React from 'react';

const Skills = () => {
    return (
        <div className="my-5 md:grid md:grid-cols-3 md:my-10">
            <div className="mx-8 px-8 py-4 bg-yellow-400 rounded-lg shadow-md md:h-64 md:py-10">
                <h1 className="text-base uppercase text-left font-bold">01 Html</h1>
                <h2 className="py-2 text-sm text-center font-bold md:py-4">Web developement</h2>
                <p className="text-sm justify-center">Criação de sites estáticos e dinâmicos, usando as melhores práticas no desenvolvimento , mantendo, expandindo e escalando de acordo com as necessidades técnicas.</p>
            </div>
            <div className="mx-8 px-8 py-4 bg-white rounded-lg shadow-md md:h-64 md:py-10">
                <h1 className="text-base uppercase text-left font-bold">02 JavaScript</h1>
                <h2 className="py-2 text-sm text-center font-bold md:py-4">Back-end - Front-end</h2>
                <p className="text-sm justify-center">Criação de serviços RESTful, rápidos, escaláveis e seguros com Node, Express e MongoDB, da instalação a produção.</p>
                <p className="text-sm justify-center">Design e implementação componentes de interface de usuário usando ReacJS, melhorando o desempenho da aplicação.</p>
            </div>
            <div className="mx-8 px-8 py-4 bg-white rounded-lg shadow-md md:h-64 md:py-10">
                <h1 className="text-base uppercase text-left font-bold">03 CSS</h1>
                <h2 className="py-2 text-sm text-center font-bold md:py-4">Web design</h2>
                <p className="text-sm justify-center">Criação de estilos, garantindo desempenho e resposividade em qualquer dispositivo.</p>
            </div>
        </div>
    );
}

export default Skills;
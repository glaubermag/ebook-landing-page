import React from 'react';
import './style.css';


function Banner() {

    return (
        <div className="banner">
            <div className="container">
                <div className="section-one">
                    <h1 className="titulo-amarelo"> 7 Medidas para Preservar Sua Empresa do COVID-19 </h1>

                    <p className="paragrafo"> Nesse E-book vamos compartilhar técnicas vencedoras que ajudaram <span className="span-bold"> GRANDES </span> empresários a passarem pelas mais duras crises!</p>
                    <p className="paragrafo">  <span className="span-bold">Baixe esse material e entenda: </span></p>
                </div>

                <div className="section-two">
                    <div className="retangulo">
                        <h1 className="titulo-form"> Quero proteger meu negócio!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
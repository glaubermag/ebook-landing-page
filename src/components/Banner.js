import React from 'react';
import './style.css';
import Pessoa from './assets/pessoas.png'; // Tell webpack this JS file uses this image
import Money from './assets/money.png'; // Tell webpack this JS file uses this image
import Joia from './assets/joia.png'; // Tell webpack this JS file uses this image


function Banner() {

    return (


        <div className="banner">
            <div className="container">
                <div className="section-one">
                    <h1 className="titulo-amarelo"> 7 Medidas para Preservar Sua Empresa do COVID-19! </h1>

                    <p className="paragrafo"> Nesse E-book vamos compartilhar técnicas vencedoras que ajudaram <span className="span-bold"> GRANDES </span> empresários a passarem pelas mais duras crises!</p>
                    <div className="section-two-mobile">

                        <div className="retangulo">
                            <h1 className="titulo-form"> Quero proteger meu negócio!</h1>

                            <form method="POST" action="https://smtl.gama.academy/leads/4a6b6151-5ffc-11ea-92b8-cb0262e26cca">
                                <p className="label-form"> Nome completo: </p>
                                <input
                                    name="name"
                                    type="text"
                                    pattern="^\D{2,}\s[\D\s]{2,}$"
                                    title="Digite seu nome completo"
                                    required
                                />
                                <p className="label-form"> Email: </p>
                                <input
                                    name="email"
                                    type="email"
                                    title="Digite um email válido"
                                    required
                                />
                                <input name="redirectTo" type="hidden" value="https://pensandodigital.netlify.com/sucesso" />
                                <button type="submit" name="meuEbook">QUERO MEU E-BOOK!</button>

                            </form>
                        </div>
                    </div>

                    <p className="paragrafo">  <span className="span-bold">Baixe esse material e entenda: </span></p>
                    <div className="container-icons">
                        <div className="section-icon">
                            <img src={Pessoa} alt="" />
                            <p className="icon-title"> As medidas tomadas pelo governo</p>
                        </div>
                        <div className="section-icon">
                            <img src={Money} alt="" />
                            <p className="icon-title"> Como superar essa crise</p>
                        </div>
                        <div className="section-icon">
                            <img src={Joia} alt="" />
                            <p className="icon-title"> Como não prejudicar seu negócio</p>
                        </div>
                    </div>
                </div>




                <div className="section-two">
                    <div className="retangulo">
                        <h1 className="titulo-form"> Quero proteger meu negócio!</h1>
                        <form method="POST" action="https://smtl.gama.academy/leads/4a6b6151-5ffc-11ea-92b8-cb0262e26cca">
                            <p className="label-form"> Nome completo: </p>
                            <input
                                name="name"
                                type="text"
                                pattern="^\D{2,}\s[\D\s]{2,}$"
                                title="Digite seu nome completo"
                                required
                            />
                            <p className="label-form"> Email: </p>
                            <input
                                name="email"
                                type="email"
                                title="Digite um email válido"
                                required
                            />


                            <button type="submit" name="meuEbook" >QUERO MEU E-BOOK!</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >



    )


}






export default Banner;
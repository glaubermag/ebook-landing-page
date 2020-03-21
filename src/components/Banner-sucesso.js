import React from 'react';


import './style.css';


function Banner() {

    return (
        <div className="banner">
            <div className="banner-sucesso">
                <h1> Obrigado por baixar o E-BOOK! </h1>
                <p className="paragrafo"> Caso o download não tenha começado automaticamente, clique no botão abaixo para começar</p>
                <a href="https://automaho.000webhostapp.com/pensando-ebook.pdf">  <button className="button-sucesso" type="submit" >BAIXAR E-BOOK</button> </a>
            </div>
        </div>
    )
}

export default Banner;

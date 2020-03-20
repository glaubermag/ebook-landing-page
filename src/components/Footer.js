import React from 'react';
import './style.css';

import Insta from './assets/insta-amarelo.svg'; // Tell webpack this JS file uses this image
import Face from './assets/face-amarelo.svg'; // Tell webpack this JS file uses this image
import Linked from './assets/linkedin-amarelo.svg'; // Tell webpack this JS file uses this image



function Footer() {

    return (

        <div className="rodape">
            <a href="https://www.linkedin.com/company/consultoria-pensando-digital">            <img src={Linked} alt="Linkedin" /> </a>
            <a href="https://www.facebook.com/consultoriapensandodigital">              <img src={Face} alt="Facebook" /></a>
            <a href="https://www.instagram.com/pensando_digital/">                <img src={Insta} alt="Instagram" /></a>
        </div>
    )
}
export default Footer;



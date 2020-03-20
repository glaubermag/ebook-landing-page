import React from 'react';
import './style.css';

import Insta from './assets/insta-amarelo.svg'; // Tell webpack this JS file uses this image
import Face from './assets/face-amarelo.svg'; // Tell webpack this JS file uses this image
import Linked from './assets/linkedin-amarelo.svg'; // Tell webpack this JS file uses this image



function Footer() {

    return (

        <div className="">
            <div className="rodape">
                <img src={Linked} alt="Linkedin" />
                <img src={Face} alt="Facebook" />
                <img src={Insta} alt="Instagram" />

            </div>
        </div>
    )
}
export default Footer;



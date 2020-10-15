import React from 'react';
import logoNegativo from '../../assets/images/logonegativo.png';
import './style.css';
import '../../assets/styles/global.css';


function Footer() {
    return (
        <div className="principal">
            <div className="footer">
                <footer>


                    <div id="leftFooter">
                        <img src={logoNegativo} alt="Logo Negativo" />
                    </div>

                    <div id="verticle-line"></div>

                    <div id="rightFooter">
                        <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p>
                        <p>Call us now toll free: (800)2345-6789</p>
                        <p>Customer support@demolink.org</p>
                        <p>Skype: sample-username</p>
                    </div>

                </footer>
            </div>
        </div>
    );
}

export default Footer;

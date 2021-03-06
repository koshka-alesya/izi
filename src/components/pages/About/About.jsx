import React from 'react';
import './About.scss';
import Fade from 'react-reveal/Fade';
const img = require('../../../img/About.png');

export default function About() {
    return (
        <div className="About">
            <div className={'container-fluid p-0'}>
                <div className={'row align-items-center m-0'} >
                    <div className={'col-xl-5 offset-xl-1 col-lg-5 offset-lg-1 col-12 p-0'}>
                        <Fade left>
                        <div className="About__img__wrapper">
                            <img className="About__img" src={img} />
                        </div>
                        </Fade>
                    </div>
                    <div className={'col-xl-5 col-lg-5 col-12 About__wrapper'}>
                        <Fade right>
                            <div className="Caption About__caption">
                                #всебудетizi
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="About__text">
                                “IZI kitchen” ресторан мультикультурной кухни. Ресторан находится в бизнес-центре премиум класса “Towers”.
                                Философия “IZI” проста: «Объединить разных людей с разными вкусами в одном месте».
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import './Interior.scss';
import Fade from 'react-reveal/Fade';
const img = require('../../../img/Interior.png')

export default function Interior() {
    return (
        <div className="Interior">
           <div className={'container-fluid p-0'}>
               <div className={'row align-items-center m-0 p-0'} >
                   <Fade left>
                       <div className={'col-xl-4 offset-xl-2 col-lg-5 offset-lg-1 col-md-6 col-12 p-0 Interior__img__wrapper'}>
                           <img className={'Interior__img'} src={img} />
                       </div>
                   </Fade>
                   <div className={'col-xl-4 col-lg-5 col-md-6 col-12 Interior__wrapper'}>
                       <Fade right>
                       <div className="Caption Interior__caption">
                           INTERIOR
                       </div>
                       </Fade>
                       <Fade left>
                       <div className="Interior__text">
                           Дизайн ресторана близок по духу и энергии самого бизнес-центра премиум класса “Towers”. Интерьер даёт понять, что ты действительно там, где должен быть. Это твоё место! Метал, камень, бетон — это основа, стержень ресторана.
                       </div>
                       </Fade>
                   </div>
               </div>
           </div>
        </div>
    );
}

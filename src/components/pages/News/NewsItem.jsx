import React from 'react';
import './News.scss';
const img = require('../../../img/news.png')

export default function NewsItem() {
    return (
        <div className="NewsItem">
            <div className={'container-fluid p-0 NewsItem__wrapper'}>
                <div className={'row align-items-center m-0 p-0'} >
                    <div className={'col-lg-3 col-md-12 col-12 p-0 NewsItem__caption__wrapper'}>
                        <div className="NewsItem__caption">
                            Завтраки в IZI
                        </div>
                        <div className="NewsItem__date">
                            23 июля
                        </div>
                    </div>
                    <div className={'col-lg-6 col-md-12 col-12 p-0 NewsItem__wrapper__img'}>
                        <div className="NewsItem__img__wrap">
                            <img src={img} className={'NewsItem__img'} />
                        </div>
                    </div>
                </div>

                <div className={'row m-0 p-0'} >
                    <div className={'col-12 p-0'}>
                        <div className="NewsItem__text">
                            <div className="About__text">
                                Мы запустили завтраки в IZI! Ждем вас с 8.00 до 12.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

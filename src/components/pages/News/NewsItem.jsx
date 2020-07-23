import React from 'react';
import './News.scss';
const img = require('../../../img/news.png')

export default function NewsItem(props) {
    return (
        <div className={props.class}>
            <div className={'container-fluid p-0 NewsItem__wrapper'}>
                <div className={'row align-items-center m-0 p-0'} >
                    <div className={'col-lg-3 col-md-12 col-12 p-0 NewsItem__caption__wrapper'}>
                        <div className="NewsItem__caption">
                            {props.caption || ""}
                        </div>
                        <div className="NewsItem__date">
                            {props.date || ""}
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
                                {props.text || ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import './Info.scss';
import Fade from 'react-reveal/Fade';

export default function Info() {
    return (
        <div className="Info">
            <Fade right>
                <div className="Info_caption">
                    <div className="Info_mask">
                    </div>
                    <div className="Caption">
                        NFO
                    </div>
                </div>
            </Fade>

                <div className="Info__wrapper">
                    <div className={'container-fluid p-0'}>
                        <div className={'row m-0'}>
                            <div className={'col-xl-2 offset-xl-4 col-md-3 offset-md-3 col-12 Info_column_first'}>
                                <div className={'Info__first__wrapper'}>
                                    <Fade left cascade>
                                    <div className="Info__contacts Info_item">
                                        <div className="Info__label">
                                            Контакты
                                        </div>
                                        <div className="Info__contacts_phone">
                                            <a className="Info__contacts_phone" href="tel:+74852331339">+7 485 233
                                                13 39</a>
                                        </div>
                                    </div>

                                    <div className="Info__additionally Info_item">
                                        <div className="Info__label">
                                            Дополнительно
                                        </div>
                                        <div className="Info__additionally_text">
                                            Подземная парковка
                                        </div>
                                        <div className="Info__additionally_text">
                                            Детская комната
                                        </div>
                                        <div className="Info__additionally_text">
                                            Детское меню
                                        </div>
                                    </div>
                                    </Fade>
                                </div>

                            </div>

                            <div className={'col-xl-2 offset-xl-0 col-md-3 offset-md-0 col-12 Info_column_second'}>
                                <Fade right cascade>
                                <div className="Info__hour Info_item">
                                    <div className="Info__label">
                                        Часы работы
                                    </div>
                                    <div className="Info__hour_text">
                                        <div>Будни: 08:00-00:00</div>
                                        <div>Выходные: 09:00-00:00</div>
                                    </div>
                                </div>

                                <div className="Info__address Info_item">
                                    <div className="Info__label">
                                        Адрес
                                    </div>
                                    <div className="Info__hour_text">
                                        Ярославль, пл. Труда, *, 1 этаж
                                    </div>
                                </div>
                                </Fade>
                            </div>
                        </div>

                    </div>

                </div>
        </div>
    );
}

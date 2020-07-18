import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './Main.scss';
import { scaleRotate as Menu } from 'react-burger-menu';

function MenuBurger() {
    return (
        <div className="Main__menu">
            <Menu >
                <a id="home" className="menu-item" href="/">ТУР РЕСТОРАНА</a>
                <a id="about" className="menu-item" href="/about">ДОСТАВКА ЕДЫ В TOWERS</a>
                <a id="contact" className="menu-item" href="/contact">МЕНЮ РЕСТОРАНА</a>
                <a id="contact" className="menu-item" href="/contact">КОНТАКТЫ</a>
            </Menu>
        </div>
    )
}

function Main() {
    return (
        <div className="Main">
            <div className="Main__tabs">
                <div className="Main__tabs_left">
                    <div className="Main_tabs_item Main_item">
                        ТУР РЕСТОРАНА
                    </div>
                    <div className="Main_item">
                        ДОСТАВКА ЕДЫ В TOWERS
                    </div>
                </div>
                <div className="Main__tabs_right">
                    <div className="Main_tabs_item Main_item">
                        МЕНЮ РЕСТОРАНА
                    </div>
                    <Link
                        activeClass="active"
                        to="Info"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={"Main_item"}
                    >
                        КОНТАКТЫ
                    </Link>
                </div>
            </div>
            <MenuBurger />
            <div className={'container-fluid p-0'} style={{flexGrow: 1}}>
                <div className={'row m-0 Main__wrapper'} style={{height: 100 + '%'}}>
                    <div className={"Main__header__wrapper"} style={{width: 100 + '%'}}>
                        <div className={'col-xl-6 offset-xl-6 col-lg-7 offset-lg-5 col-12 Main__header'}>
                            <div className="Main__header_wild"></div>
                        </div>
                        <div className={'col-lg-5 offset-lg-7 col-12 Main__reserve__wrapper'}>
                            <div className="Main__reserve">
                                <div className="Main__reserve_circle"></div>
                                Забронировать
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"Main__links"}>
                <div className={"Main__link"}>
                    instagram
                </div>
                <div className={"Main__link"}>
                    Tripadvisor
                </div>
            </div>
        </div>
    );
}

export default Main;

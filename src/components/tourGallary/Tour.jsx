import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallary.scss";

export default class CenterMode extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: true
        };
        return (
            <div>
                <div className="Caption Tour__Caption">
                    restaurant tour
                </div>
                <Slider {...settings}>
                    <div className={"Tour__slide"}>
                        <img className={"Tour__slide__img"} src={require("../../img/tour/1.jpeg")}/>
                    </div>
                    <div className={"Tour__slide"}>
                        <img className={"Tour__slide__img"} src={require("../../img/tour/2.jpeg")}/>
                    </div>
                    <div className={"Tour__slide"}>
                        <img className={"Tour__slide__img"} src={require("../../img/tour/3.jpeg")}/>
                    </div>
                    <div className={"Tour__slide"}>
                        <img className={"Tour__slide__img"} src={require("../../img/tour/4.jpeg")}/>
                    </div>
                    <div className={"Tour__slide"}>
                        <img className={"Tour__slide__img"} src={require("../../img/tour/5.jpeg")}/>
                    </div>
                    <div className={"Tour__slide"}>
                        <img className={"Tour__slide__img"} src={require("../../img/tour/6.jpeg")}/>
                    </div>
                    <div className={"Tour__slide"}>
                        <img className={"Tour__slide__img"} src={require("../../img/tour/7.jpeg")}/>
                    </div>
                    <div className={"Tour__slide"}>
                        <img className={"Tour__slide__img"} src={require("../../img/tour/8.jpeg")}/>
                    </div>
                    <div className={"Tour__slide"}>
                        <img className={"Tour__slide__img"} src={require("../../img/tour/9.jpeg")}/>
                    </div>
                </Slider>
            </div>
        );
    }
}
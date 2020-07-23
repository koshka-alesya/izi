import React, {Component} from 'react';
import './News.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsItem from "./NewsItem";
import NewsItemTest from "./NewsItemTest";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function SampleNextArrow(props) {
    console.log(props);
    const {className, style, currentSlide, count, onClick} = props;
    return (
        <div
            className={"ButtonNext"}
            onClick={onClick}
        >
            <div className={"ButtonText__number_wrapper"}>
                <div className={"ButtonText__number"}>
                    {currentSlide + 1}
                </div>
                <div className={"ButtonText__number_count"}>
                    /{props.count}
                </div>
            </div>
            <div className={"ButtonNext__wrapper"}>
                <div className={"ButtonNext__text"}>дальше</div>
                <div
                    className={"ButtonNext__arrow"}>
                </div>
            </div>
        </div>
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={"ButtonNext"}
            onClick={onClick}
            style={{display: "none"}}
        >
        </div>
    );
}

export default class NewsSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 0
        };
        this.hideOldSlide = this.hideOldSlide.bind(this);
    }
    hideOldSlide(current, next) {

    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            customPaging: "50px",
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow count={6}/>,
            prevArrow: <SamplePrevArrow/>,
            afterChange: current => this.setState({activeSlide: current}),
            beforeChange: (current, next) => this.hideOldSlide(current, next)
        };
        const style = {
            marginRight: 200 + 'px',
            marginLeft: 200 + 'px'
        }
      /*  let listNews = this.props.news.map((val, index) => {
            return <NewsItemTest key={index} caption={val.caption} date={val.date} text={val.text} img={val.img} class={(index === this.state.activeSlide) ? 'NewsItem NewsItem__active' : 'NewsItem'}/>
        });*/
        return (
            <div>
                <div className={'container-fluid p-0'}>
                    <div className={'row align-items-center m-0'}>
                        <div className={'col-lg-4 col-12 p-0'}>
                            <Fade left>
                                <div className="Caption News__caption">
                                    what`s
                                    new?
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <Zoom>
                    <div>
                        <Slider {...settings} >
                            <div className={`slide`}>
                                <NewsItem class={'NewsItem'} caption={"Завтраки в IZI"} date={"23 июля"} text={"Мы запустили завтраки в IZI! Ждем вас с 8.00 до 12.00"}/>
                            </div>
                            <div>
                                <NewsItemTest/>
                            </div>
                            <div>
                                <NewsItem/>
                            </div>
                            <div>
                                <NewsItem/>
                            </div>
                            <div>
                                <NewsItem/>
                            </div>
                            <div>
                                <NewsItem/>
                            </div>
                        </Slider>
                    </div>
                </Zoom>
            </div>
        );
    }
}

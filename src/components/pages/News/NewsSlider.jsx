import React, {Component} from 'react';
import './News.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsItem from "./NewsItem";

function SampleNextArrow(props) {
    console.log(props);
    const { className, style, currentSlide, count, onClick } = props;
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
    const { className, style, onClick } = props;
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
    state = {
        activeSlide: 0
    };
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow count={6}/>,
            prevArrow: <SamplePrevArrow />,
            afterChange: current => this.setState({ activeSlide: current })
        };
        const style = {
            marginRight: 200 +'px',
            marginLeft: 200 + 'px'
        }
        return (
            <div>
                <div className={'container-fluid p-0'}>
                    <div className={'row align-items-center m-0'} >
                        <div className={'col-lg-4 col-12 p-0'}>
                            <div className="Caption News__caption">
                                what`s
                                new?
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Slider {...settings} >
                        <div>
                            <NewsItem />
                        </div>
                        <div>
                            <NewsItem />
                        </div>
                        <div>
                            <NewsItem />
                        </div>
                        <div>
                            <NewsItem />
                        </div>
                        <div>
                            <NewsItem />
                        </div>
                        <div>
                            <NewsItem />
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

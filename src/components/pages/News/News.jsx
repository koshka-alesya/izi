import React, {Component} from 'react';
import './News.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsItem from "./NewsItem";
import NewsSlider from "./NewsSlider";

export default function News() {
    return (
        <div className="News">
            <div className={'container-fluid p-0'}>
                <div className={'row align-items-center m-0'} >
                    <NewsSlider />
                </div>
            </div>
        </div>
    );
}

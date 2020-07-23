import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import './Gallary.scss';

const images = [
    {
        original: require('../../img/tour/1.jpeg'),
        thumbnail: require('../../img/tour/1.jpeg'),
    },
    {
        original: require('../../img/tour/2.jpeg'),
        thumbnail: require('../../img/tour/2.jpeg'),
    },
    {
        original: require('../../img/tour/3.jpeg'),
        thumbnail: require('../../img/tour/3.jpeg'),
    },
    {
        original: require('../../img/tour/5.jpeg'),
        thumbnail: require('../../img/tour/5.jpeg'),
    },
    {
        original: require('../../img/tour/6.jpeg'),
        thumbnail: require('../../img/tour/6.jpeg'),
    },
    {
        original: require('../../img/tour/7.jpeg'),
        thumbnail: require('../../img/tour/7.jpeg'),
    },
    {
        original: require('../../img/tour/8.jpeg'),
        thumbnail: require('../../img/tour/8.jpeg'),
    },
    {
        original: require('../../img/tour/9.jpeg'),
        thumbnail: require('../../img/tour/9.jpeg'),
    },
    {
        original: require('../../img/tour/4.jpeg'),
        thumbnail: require('../../img/tour/4.jpeg'),
    }
];

export default class Gallary extends Component {
    render() {
        return <ImageGallery items={images} originalClass={"originalClassImg"} thumbnailClass={"thumbnailClassImg"} lazyLoad={true}/>;
    }
}
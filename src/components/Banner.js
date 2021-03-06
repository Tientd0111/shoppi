import React, { Component } from "react";
import '../styles/banner.scss'
class Banner extends Component {
    render() {
        return (
            <>
            <div id="demo" className="carousel slide banner-top" data-ride="carousel">
                    {/* Indicators */}
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to={0} className="active" />
                        <li data-target="#demo" data-slide-to={1} />
                        <li data-target="#demo" data-slide-to={2} />
                    </ul>
                    {/* The slideshow */}
                    <div className="carousel-inner imag">
                        <div className="carousel-item active">
                            <img className="imgBanner" src="assets/img/banner/slide-img2.jpg" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img className="imgBanner" src="assets/img/banner/slide-img4.jpg" alt="Chicago" width={1100} height={500} />
                        </div>
                        <div className="carousel-item">
                            <img className="imgBanner" src="assets/img/banner/slide-img5.jpg" alt="New York" width={1100} height={500} />
                        </div>
                    </div>
                    {/* Left and right controls */}
                    <a className="carousel-control-prev car-nav" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon" />
                    </a>
                    <a className="carousel-control-next car-nav" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon" />
                    </a>
                </div>
                </>
        );
    }
}

export default Banner;
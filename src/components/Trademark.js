import React from "react";
class Trademark extends React.Component {
    render() {
        return (
            <>
                <div className="container text-center my-3">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Thương Hiệu</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                    </div>
                    <div id="recipeCarousel" className="carousel" data-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item  no-gutters active">
                                <div className="row">
                                    <div className="col-3"><img className="img-fluid logo-brand" src="assets/img/logo/brand1.png" alt="..."/></div>
                                    <div className="col-3"><img className="img-fluid logo-brand" src="assets/img/logo/brand3.png" alt="..."/></div>
                                    <div className="col-3"><img className="img-fluid logo-brand" src="assets/img/logo/brand4.png" alt="..."/></div>
                                    <div className="col-3"><img className="img-fluid logo-brand" src="assets/img/logo/brand5.png" alt="..."/></div>
                                </div>
                            </div>
                            <div className="carousel-item no-gutters">
                                <div className="row">
                                    <div className="col-3"><img className="img-fluid logo-brand" src="assets/img/logo/brand4.png" alt="..."/></div>
                                    <div className="col-3"><img className="img-fluid logo-brand" src="assets/img/logo/brand3.png" alt="..."/></div>

                                    <div className="col-3"><img className="img-fluid logo-brand" src="assets/img/logo/brand1.png" alt="..."/></div>
                                    <div className="col-3"><img className="img-fluid" src="assets/img/logo/brand5.png" alt="..."/></div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </>
        );
    }
}

export default Trademark;
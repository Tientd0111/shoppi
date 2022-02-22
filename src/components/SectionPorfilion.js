import React, { Component } from 'react';
import '../styles/HomeProduct.scss';
import { Link } from 'react-router-dom';
class ProductHot extends Component {
    render() {
        return (
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    {/* Portfolio Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Sản Phẩm Hot</h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                    </div>
                    {/* Hiển thị sản phẩm hot*/}
                    <div className="row">
                        <div className='col-md-1'></div>
                        <div className='col-md-2 col-sm-6 col-xs-6'>
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-cart-plus"></i></div>
                                </div>
                                <ul className="onhot-fix">	
                                    <li>Hot</li>
                                </ul>
                                <ul className="onsale-fix">	
                                    <li>Sale</li>
                                </ul>
                                <img className="img-fluid zoom_img" src="assets/img/product/1-acb91954-321a-427a-acce-4127c483bd6f.jpg" alt="" />
                            </div>
                            <div className='product-name'>
                                <Link to='/'><p>Dico Checkerboard Knit Cardigan - Grey</p></Link>
                                <span className="regular-price">450.000₫</span>
                                <span className='price ml5'>500.000đ</span>
                            </div>
                        </div>
                        <div className='col-md-2 col-sm-6 col-xs-6'>
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-cart-plus"></i></div>
                                </div>
                                <ul className="onhot-fix">	
                                    <li>Hot</li>
                                </ul>
                                <ul className="onsale-fix">	
                                    <li>Sale</li>
                                </ul>
                                <img className="img-fluid zoom_img" src="assets/img/product/1-89654ea2-5723-4cbc-95db-bfc6b30f81c9.jpg" alt="" />
                            </div>
                            <div className='product-name'>
                                <Link to="/"><p>Dico Checkerboard Knit Cardigan - Grey</p></Link>
                                <span class="regular-price">450.000₫</span>
                                <span className='price ml5'>500.000đ</span>
                            </div>
                        </div>
                        <div className='col-md-2 col-sm-6 col-xs-6'>
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-cart-plus"></i></div>
                                </div>
                                <ul className="onhot-fix">	
                                    <li>Hot</li>
                                </ul>
                                <ul className="onsale-fix">	
                                    <li>Sale</li>
                                </ul>
                                <img className="img-fluid zoom_img" src="assets/img/product/1-5-28a0881b-ee66-4c8c-ac4c-b775d597ff5f.jpg" alt="" />
                            </div>
                            <div className='product-name'>
                                <Link to="/"><p>Dico Checkerboard Knit Cardigan - Grey</p></Link>
                                <span class="regular-price">450.000₫</span>
                                <span className='price ml5'>500.000đ</span>
                            </div>
                        </div>
                        <div className='col-md-2 col-sm-6 col-xs-6'>
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-cart-plus"></i></div>
                                </div>
                                <ul className="onhot-fix">	
                                    <li>Hot</li>
                                </ul>
                                <ul className="onsale-fix">	
                                    <li>Sale</li>
                                </ul>
                                <img className="img-fluid zoom_img" src="assets/img/product/cardigan-pink-trcv.jpg" alt="" />
                            </div>
                            <div className='product-name'>
                                <Link to="/"><p>Dico Checkerboard Knit Cardigan - Grey</p></Link>
                                <span class="regular-price">450.000₫</span>
                                <span className='price ml5'>500.000đ</span>
                            </div>
                        </div>
                        <div className='col-md-2 col-sm-6 col-xs-6 item'>
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-cart-plus"></i></div>
                                </div>
                                <ul className="onhot-fix">	
                                    <li>Hot</li>
                                </ul>
                                <ul className="onsale-fix">	
                                    <li>Sale</li>
                                </ul>
                                <img className="img-fluid zoom_img" src="assets/img/product/1-5.jpg" alt="" />
                            </div>
                            <div className='product-name'>
                                <Link to="/"><p>Dico Checkerboard Knit Cardigan - Grey</p></Link>
                                <span class="regular-price">450.000₫</span>
                                <span className='price ml5'>500.000đ</span>
                            </div>
                        </div>

                        <div className='col-md-1'></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProductHot;

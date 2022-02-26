import React from "react";
import '../styles/HomeProduct.scss';
import { Link } from "react-router-dom";
class NewProduct extends React.Component {
    render() {
        return (
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    {/* Portfolio Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Sản Phẩm Mới</h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Grid Items*/}
                    <div className="row">
                        <div className='col-md-1'></div>
                        <div className='col-lg-2 col col-md-12 col-sm-3 col-xs-12'>
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-cart-plus"></i></div>
                                </div>
                                <ul className="onsale-fix">	
                                    <li>New</li>
                                    
                                </ul>
                                <img className="img-fluid zoom_img" src="assets/img/product/1-acb91954-321a-427a-acce-4127c483bd6f.jpg" alt="" />
                            </div>
                            <div className='product-name'>
                                <Link to="/"><p>Dico Checkerboard Knit Cardigan - Grey</p></Link>
                                <span class="regular-price">450.000₫</span>
                            </div>
                        </div>
                        <div className='col-lg-2 col col-md-12 col-sm-3 col-xs-12'>
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-cart-plus"></i></div>
                                </div>
                                <ul className="onsale-fix">	
                                    <li>New</li>
                                    
                                </ul>
                                <img className="img-fluid zoom_img" src="assets/img/product/1-89654ea2-5723-4cbc-95db-bfc6b30f81c9.jpg" alt="" />
                            </div>
                            <div className='product-name'>
                                <Link to="/"><p>Dico Checkerboard Knit Cardigan - Grey</p></Link>
                                <span class="regular-price">450.000₫</span>
                            </div>
                        </div>
                        <div className='col-lg-2 col col-md-12 col-sm-3 col-xs-12'>
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-cart-plus"></i></div>
                                </div>
                                <ul className="onsale-fix">	
                                    <li>New</li>
                                    
                                </ul>
                                <img className="img-fluid zoom_img" src="assets/img/product/1-5-28a0881b-ee66-4c8c-ac4c-b775d597ff5f.jpg" alt="" />
                            </div>
                            <div className='product-name'>
                                <Link to="/"><p>Dico Checkerboard Knit Cardigan - Grey</p></Link>
                                <span class="regular-price">450.000₫</span>
                            </div>
                        </div>
                        <div className='col-lg-2 col col-md-12 col-sm-3 col-xs-12'>
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-cart-plus"></i></div>
                                </div>
                                <ul className="onsale-fix">	
                                    <li>New</li>
                                    
                                </ul>
                                <img className="img-fluid zoom_img" src="assets/img/product/cardigan-pink-trcv.jpg" alt="" />
                            </div>
                            <ul className="onsale-fix">	
                                    <li>New</li>
                                    
                                </ul>
                            <div className='product-name'>
                                <Link to="/"><p>Dico Checkerboard Knit Cardigan - Grey</p></Link>
                                <span class="regular-price">450.000₫</span>
                            </div>
                        </div>
                        <div className='col-lg-2 col col-md-12 col-sm-3 col-xs-12'>
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-cart-plus"></i></div>
                                </div>
                                <ul className="onsale-fix">	
                                    <li>New</li>
                                    
                                </ul>
                                <img className="img-fluid zoom_img" src="assets/img/product/1-5.jpg" alt="" />
                            </div>
                            <div className='product-name'>
                                <Link to="/"><p>Dico Checkerboard Knit Cardigan - Grey</p></Link>
                                <span class="regular-price">450.000₫</span>
                            </div>
                        </div>
                        <div className='col-md-1'></div> 
                    </div>
                    <div className="row new-2">
                        <div className='col-md-1'></div>
                        <div className='col-lg-2 col col-md-12 col-sm-3 col-xs-12'>
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-cart-plus"></i></div>
                                </div>
                                <ul className="onsale-fix">	
                                    <li>New</li>
                                    
                                </ul>
                                <img className="img-fluid zoom_img" src="assets/img/product/1.jpg" alt="" />
                            </div>
                            <div className='product-name'>
                                <Link to="/"><p>Dico Checkerboard Knit Cardigan - Grey</p></Link>
                                <span class="regular-price">450.000₫</span>
                            </div>
                        </div>
                        <div className='col-lg-2 col col-md-12 col-sm-3 col-xs-12'>
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-cart-plus"></i></div>
                                </div>
                                <ul className="onsale-fix">	
                                    <li>New</li>
                                    
                                </ul>
                                <img className="img-fluid zoom_img" src="assets/img/product/2.jpg" alt="" />
                            </div>
                            <div className='product-name'>
                                <Link to="/"><p>Dico Checkerboard Knit Cardigan - Grey</p></Link>
                                <span class="regular-price">450.000₫</span>
                            </div>
                        </div>
                        <div className='col-lg-2 col col-md-12 col-sm-3 col-xs-12'>
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-cart-plus"></i></div>
                                </div>
                                <ul className="onsale-fix">	
                                    <li>New</li>
                                    
                                </ul>
                                <img className="img-fluid zoom_img" src="assets/img/product/3.jpg" alt="" />
                            </div>
                            <div className='product-name'>
                                <Link to="/"><p>Dico Checkerboard Knit Cardigan - Grey</p></Link>
                                <span class="regular-price">450.000₫</span>
                            </div>
                        </div>
                        <div className='col-lg-2 col col-md-12 col-sm-3 col-xs-12'>
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-cart-plus"></i></div>
                                </div>
                                <ul className="onsale-fix">	
                                    <li>New</li>
                                    
                                </ul>
                                <img className="img-fluid zoom_img" src="assets/img/product/4.jpg" alt="" />
                            </div>
                            <ul className="onsale-fix">	
                                    <li>New</li>
                                    
                                </ul>
                            <div className='product-name'>
                                <Link to="/"><p>Dico Checkerboard Knit Cardigan - Grey</p></Link>
                                <span class="regular-price">450.000₫</span>
                            </div>
                        </div>
                        <div className='col-lg-2 col col-md-12 col-sm-3 col-xs-12'>
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-cart-plus"></i></div>
                                </div>
                                <ul className="onsale-fix">	
                                    <li>New</li>
                                    
                                </ul>
                                <img className="img-fluid zoom_img" src="assets/img/product/5.jpg" alt="" />
                            </div>
                            <div className='product-name'>
                                <Link to="/"><p>Dico Checkerboard Knit Cardigan - Grey</p></Link>
                                <span class="regular-price">450.000₫</span>
                            </div>
                        </div>
                        <div className='col-md-1'></div>
                        
                        
                    </div>
                    <div className="view-all-product">
                        <Link to="/" className="btnx"><span className="btn-content">Xem tất cả</span></Link>
                    </div>
                </div>
                
            </section>
        );
    }
}
export default NewProduct;
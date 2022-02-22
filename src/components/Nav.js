import React, { Component } from 'react';
import '../styles/nav.scss';
import logo from '../asset/images/800px-Adidas_Logo.svg.png';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <img src={logo} className="logo" />
                    </a>
                    <button
                        className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                        type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <div className='container'>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-res">
                                <li className="nav-item cate">
                                    <Link to="/" className='nav-link'>Danh Mục</Link>
                                    <ul className='sub-menu'>
                                        <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children'>
                                            <Link to="/" className='nav-link drop'>Áo</Link>
                                            <ul className='menu-top'>
                                                <li className='menu-item menu-item-type-custom menu-item-object-custom'>
                                                    <Link to="/" className='nav-link drop'>T-shirt</Link>
                                                </li>
                                                <li className='menu-item menu-item-type-custom menu-item-object-custom'>
                                                    <Link to="/" className='nav-link drop' >Cardigan</Link>
                                                </li>
                                                <li className='menu-item menu-item-type-custom menu-item-object-custom'>
                                                    <Link to="/" className='nav-link drop'>Hoodie</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children'>
                                            <Link to="/" className='nav-link drop' >Quần</Link>
                                            <ul className='menu-top'>
                                                <li className='menu-item menu-item-type-custom menu-item-object-custom'>
                                                    <Link to="/" className='nav-link drop'>DRESSES & SKIRTS</Link>
                                                </li>
                                                <li className='menu-item menu-item-type-custom menu-item-object-custom'>
                                                    <Link to="/" className='nav-link drop' >PANTS</Link>
                                                </li>
                                                <li className='menu-item menu-item-type-custom menu-item-object-custom'>
                                                    <Link to="/" className='nav-link drop'>SHORTS</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children'>
                                            <Link to="/" className='nav-link drop'>Phụ kiện</Link>
                                            <ul className='menu-top'>
                                                <li className='menu-item menu-item-type-custom menu-item-object-custom'>
                                                    <Link to="/" className='nav-link drop'>Kính</Link>
                                                </li>
                                                <li className='menu-item menu-item-type-custom menu-item-object-custom'>
                                                    <Link to="/" className='nav-link drop' >Mũ</Link>
                                                </li>
                                                <li className='menu-item menu-item-type-custom menu-item-object-custom'>
                                                    <Link to="/" className='nav-link drop'>Bandana Pack</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className='nav-link'>Sản Phẩm</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/account" className='nav-link'>Tài khoản</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className='nav-link'>Liên Hệ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='cart'>
                            <Link to="/user" className='cart-head'>
                                <i className='fa fa-user user' />
                            </Link>
                        </div>
                        <div className='cart'>
                            <Link to="/cart" className='cart-head'>
                                <img src='assets/img/logo/cart-icon.png' />
                                <span className='hd-cart-count'>0</span>
                            </Link>
                        </div>
                        {/* <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form> */}
                    </div>
                </div>
            </nav>
        );
    }
}
export default Nav;
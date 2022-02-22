import React from "react";
import '../styles/Cart.scss';
import { Link } from 'react-router-dom';

class Cart extends React.Component{
    render(){
        return(
            <section className="page-section" id="cart">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Giỏ hàng</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" />
                    </div>
                    <div className="divider-custom-line" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12 col-xs-12 listItem">
                            <div className="table-cart-area">
                                <form action="" method="post">
                                    <table class="table table-cart">
                                        <tbody>
                                            <tr>
                                                <th></th>
                                                <th>Sản phẩm</th>
                                                <th>Số lượng</th>
                                                <th>Tổng tiền</th>
                                                <th>Xóa</th>
                                            </tr>
                                            <tr className="cartItem">
                                                <td className="product">
                                                    <div className="thumb-cart">
                                                        <Link to="/" className>
                                                            <img className="img-cart" alt="DirtyCoins Mascot Print T-shirt - Black" src="assets/img/product/1-5-28a0881b-ee66-4c8c-ac4c-b775d597ff5f.jpg"/>
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    <b>DirtyCoins Mascot Print T-shirt - Black</b>
                                                    <p>Size S</p>
                                                </td>
                                                <td></td>
                                                <td><span>400.000đ</span></td>
                                                <td>
                                                    <Link to="/" className="trash-icon">
                                                        <i className="fa fa-trash"/>
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                            <div className="button-action">
                                    <Link to="/" className="cartContinue">Tiếp tục mua sắm</Link>
                                </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12 listInfo">
                            <div className="calculate-area">
                                <div className="ct-ft-cart">
                                    <div className="total-cart">
                                        <div className="subtotal">
                                            <span>Tổng tiền <b>400.000đ</b></span>
                                        </div>
                                        <div className="final-total text-center">
                                            <Link to="/" className="update-cart">Thanh toán</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Cart;
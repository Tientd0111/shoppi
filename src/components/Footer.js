import React, { Component } from 'react';
import '../styles/footer.scss';

class Footer extends Component {
    render() {
        return (
            <>
                <footer>
                    <div className="container">
                        {/*Bắt Đầu Nội Dung Giới Thiệu*/}
                        <div className="noi-dung about">
                            <h2>Về Chúng Tôi</h2>
                            <p>DirtyCoins xuất hiện trên thị trường từ đầu năm 2017, DirtyCoins mang sức mạnh của một thương hiệu local brand đầy cá tính với những sản phẩm thời trang hàng đầu xu thế. DirtyCoins thực chất là một cách lồng ghép khéo léo về sự ra đời của thương hiệu. Chữ Y trên đồng tiền tượng trưng cho tiền thân của DirtyCoins, The Yars Shop. Bắt nguồn từ Yars, DirtyCoins trân trọng giá trị của đồng tiền xương máu, thành quả lao động đầy mồ hôi, bụi bẩn và nước mắt</p>
                            <ul className="social-icon">
                                <li>
                                    <a href="https://www.facebook.com/HQLTECH">
                                    <i class="fab fa-facebook"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                    <i class="fab fa-twitter"></i>

                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fab fa-youtube" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/*Kết Thúc Nội Dung Giới Thiệu*/}
                        {/*Bắt Đầu Nội Dung Đường Dẫn*/}
                        <div className="noi-dung links">
                            <h2>Đường Dẫn</h2>
                            <ul>
                                <li>
                                    <a href="#">Trang Chủ</a>
                                </li>
                                <li>
                                    <a href="#">Về Chúng Tôi</a>
                                </li>
                                <li>
                                    <a href="#">Thông Tin Liên Lạc</a>
                                </li>
                                <li>
                                    <a href="#">Dịch Vụ</a>
                                </li>
                                <li>
                                    <a href="#">Điều Kiện Chính Sách</a>
                                </li>
                            </ul>
                        </div>
                        {/*Kết Thúc Nội Dung Đường Dẫn*/}
                        {/*Bắt Đâu Nội Dung Liên Hệ*/}
                        <div className="noi-dung contact">
                            <h2>Thông Tin Liên Hệ</h2>
                            <ul className="info">
                                <li>
                                    <span>
                                        <i className="fa fa-map-marker" />
                                    </span>
                                    <span>
                                        Số nhà 37,ngõ 79,Trần Cung,Nghĩa Tân
                                        <br />
                                        Hà Nội
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <i className="fa fa-phone" />
                                    </span>
                                    <p>
                                        <a href="#">+84 123 456 789</a>
                                        <br />
                                        <a href="#">+84 987 654 321</a>
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <i className="fa fa-envelope" />
                                    </span>
                                    <p>
                                        <a href="#">tientd0111@gmail.com</a>
                                    </p>
                                </li>
                                
                            </ul>
                        </div>
                        {/*Kết Thúc Nội Dung Liên Hệ*/}
                    </div>
                </footer>

            </>
        );
    }
}

export default Footer;
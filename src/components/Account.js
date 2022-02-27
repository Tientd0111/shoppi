import React from "react";
import '../styles/Account.scss';

class Account extends React.Component {
  render() {
    return (
      <>
        <div className="container body">
           <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Tài khoản</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" />
                    </div>
                    <div className="divider-custom-line" />
                </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <h5 className="title-box-login">Đăng nhập</h5>
                <form>
                  <div className="col-full">
                    <span className="not-null">*</span>
                    <span className="fa fa-envelope icon-form"></span>
                    <input name="email" id="email" className="form-control" placeholder="Email của bạn" />
                  </div>
                  <div className="col-full">
                    <span className="not-null">*</span>
                    <span className="fa fa-lock icon-form"></span>
                    <input name="password" id="password" className="form-control" placeholder="Nhập mật khẩu" />
                  </div>
                  <div className="col_full nobottommargin action">
                    <button className="button button-3d button-black nomargin">Đăng nhập</button>
                  </div>
                </form>
              </div>
              <div className="col-sm-6 col-xs-12">
                <h5 className="title-box-login">Đăng ký</h5>
                <form>
                  <div className="col-full">
                    <span className="not-null">*</span>
                    <span className="fa fa-user icon-form"></span>
                    <input name="name" id="name" className="form-control" placeholder="Tên" />
                  </div>
                  <div className="col-full">
                    <span className="not-null">*</span>
                    <span className="fa fa-user icon-form"></span>
                    <input name="fname" id="fname" className="form-control" placeholder="Họ" />
                  </div>
                  <div className="col-full">
                    <span className="not-null">*</span>
                    <span className="fa fa-envelope icon-form"></span>
                    <input name="email" id="email" className="form-control" placeholder="Email của bạn" />
                  </div>
                  <div className="col-full">
                    <span className="not-null">*</span>
                    <span className="fa fa-phone icon-form"></span>
                    <input name="phone" id="phone" className="form-control" placeholder="Số điện thoại" />
                  </div>
                  <div className="col-full">
                    <span className="not-null">*</span>
                    <span className="fa fa-lock icon-form"></span>
                    <input name="password" id="password" className="form-control" placeholder="Mật khẩu" />
                  </div>
                  <div className="col_full nobottommargin action">
                    <button className="button button-3d button-black nomargin">Đăng ký</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Account;
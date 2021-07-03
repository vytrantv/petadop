import React, { Component } from 'react'

export default class Signin extends Component {
    render() {
        return (
            <div>
            <div className="container-fluid">
            <div className="row no-gutter">
              {/* The image half */}
              <div className="col-md-6 d-none d-md-flex bg-image" />
              {/* The content half */}
              <div className="col-md-6 bg-light">
                <div className="login d-flex align-items-center py-5">
                  {/* Demo content*/}
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-10 col-xl-7 mx-auto">
                        <h3 className="display-4">Đăng nhập</h3>
                        <p className="text-muted mb-4">Hãy nhận nuôi, yêu thương chó cỏ</p>
                        <form>
                          <div className="form-group mb-3">
                            <input id="inputEmail" type="email" placeholder="Email address" required autofocus className="form-control rounded-pill border-0 shadow-sm px-4" />
                          </div>
                          <div className="form-group mb-3">
                            <input id="inputPassword" type="password" placeholder="Password" required className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input id="customCheck1" type="checkbox" defaultChecked className="custom-control-input" />
                            <label htmlFor="customCheck1" className="custom-control-label">Quên mật khẩu</label>
                          </div>
                          <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Đăng nhập</button>
                          <div className="text-center d-flex justify-content-between mt-4"><p>Designed by <a href="https://bootstrapious.com/snippets" className="font-italic text-muted"> 
                                <u> Tran Thi Vy</u></a></p></div>
                        </form>
                      </div>
                    </div>
                  </div>{/* End */}
                </div>
              </div>{/* End */}
            </div>
          </div>
          
            </div>
        )
    }
}

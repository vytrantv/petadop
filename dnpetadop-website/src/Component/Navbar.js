import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
      <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn"><span /></label>
        <label htmlFor="active" className="close" />
        <div className="wrapper">
          <ul>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/blog" >Thông tin</Link></li>
          <li><Link to="/adoption" >Nhận nuôi</Link></li>
          <li><Link to="/donate">Ủng hộ</Link></li>
          <li><Link to="/contact">Liên hệ</Link></li>
          <li><Link to="/signup">Đăng nhập</Link></li>
          </ul>
        </div>

      </div>
      

    )
  }
}

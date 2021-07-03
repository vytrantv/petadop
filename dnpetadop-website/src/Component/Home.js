import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BlogDetail from './BlogDetail';
import Pet from './Pet';
import Slide from './Slide';
import Service from './Service';
import Itemdonate from './Itemdonate';

class Home extends Component {
  render() {
    return (
      <div>
       <Slide/>
        {/* End Hero */}

        {/* Begin About */}
        <div className="about wow bounceInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <div className="about-img">
                  <img src="image/about.png" alt="slide-4" />
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="section-header text-left">
                  <p>Về chúng tôi</p>
                  <h2>Nhận nuôi thú cưng bị bỏ rơi</h2>
                </div>
                <div className="about-text">
                  <p>
                    Chúng tôi là một nhóm trẻ gồm tình nguyện viên Việt Nam và một số bạn nước ngoài, cùng hoạt động vì tình yêu chó mèo. Chúng tôi cố gắng chăm sóc tốt nhất có thể, phần nào bù đắp lại những tổn thương cho các bé được cứu hộ về dù là hoang, lạc, bị bỏ rơi hay bạo hành.
                  </p>
                  <p>
                    Ngoài ra, chúng tôi cũng luôn nỗ lực tìm mái ấm yêu thương các bé trọn đời.
                  </p>
                  <Link className="btn" to="/blog">Đọc thêm</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About */}

        {/* Begin Class */}
        <div className="class">
          <div className="container">
            <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
              <p>Dịch vụ thú cưng</p>
              <h2>Tất cả dịch vụ</h2>
            </div>
            <div className="row class-container">
              <Service name="Ms. Mon" image="image/dichvu-1.png">Tắm rửa</Service>
              <Service name="Ms. Pig" image="image/dichvu-2.jpeg">Nhuộm lông</Service>
              <Service name="Ms. Vy" image="image/dichvu-3.jpeg">Cắt tỉa</Service>
              <Service name="Ms. Vy" image="image/dichvu-5.jpeg">Chăm sóc boss bệnh</Service>
              <Service name="Ms. Mon" image="image/dichvu-4.jpeg">Khám bệnh</Service>
            </div>
          </div>
        </div>
        {/* Class End */}


        {/* Discount Start */}
        <div className="discount wow zoomIn" data-wow-delay="0.1s">
          <div className="container">
            <div className="section-header text-center">
              <p>Tình nguyện viên</p>
              <h2>Hơn <span>100</span> người muốn đăng ký làm tình nguyện viên</h2>
            </div>
            <div className="container discount-text">
              <p>
                “ Người ta có thể vứt bỏ một con chó, mèo khi hết giá trị, nhưng chúng tôi lại muốn cứu sống chúng hết sức có thể. Động vật cũng giống như con người vậy, chúng cần được bảo vệ, tôn trọng thay vì “ không thích thì vứt ".
              </p>
              <Link to="/volunteer" className="btn">Tham gia ngay</Link>
            </div>
          </div>
        </div>
        {/* Discount End */}


        {/* Begin Price */}
        <div className="price">
          <div className="container">
            <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
              <p>Ủng hộ</p>
              <h2>Ủng hộ các bé</h2>
            </div>
            <div className="row">
              <Itemdonate image="image/sp-1.png">Quần áo</Itemdonate>
              <Itemdonate image="image/sp-2.png">Thức ăn</Itemdonate>
              <Itemdonate image="image/sp-3.png">Bỉm</Itemdonate>
            </div>
          </div>
        </div>
        {/* Price End */}


        {/* Team */}
        <div className="team">
          <div className="container">
            <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
              <p>Danh sách các bé</p>
              <h2>Bé ngoan trong tuần</h2>
            </div>
            <div className="row">
              <Pet sex="Đực" age="3 tháng" image="/image/dog/coco.jpg" status="Đang tìm chủ">Hank</Pet>
              <Pet sex="Cái" age="8 tháng" image="/image/cat/lily.jpeg" status="Đang tìm chủ">Dalgom</Pet>
              <Pet sex="Cái" age="2 tuổi" image="/image/cat/lucy.jpeg" status="Đang tìm chủ">Kuma</Pet>
              <Pet sex="Đực" age="1 tuổi" image="/image/dog/beo.jpeg" status="Đang tìm chủ">Louis</Pet>
            </div>
          </div>
        </div>
        {/* Team End */}


        {/* Blog */}
        <div className="blog" id="blog">
          <div className="container">
            <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
              <p>Tin tức</p>
              <h2>Tin mới nhất</h2>
            </div>
            <div className="row">
              <BlogDetail image="/image/slide-2.jpeg"></BlogDetail>
              <BlogDetail image="/image/slide-3.png"></BlogDetail>
            </div>
          </div>
        </div>
        <div>
          {/* Blog End */}

          {/* ======= Footer ======= */}
          <footer id="footer">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="footer-info">
                      <h3>Petadoption</h3>
                      <strong>Phone:</strong> +84 974 717 485<br />
                      <strong>Email:</strong> vytran.tv26@gmail.com<br />
                      <div className="social-links mt-3">
                        <Link to="/" className="twitter"><i className="fab fa-twitter" /></Link>
                        <Link to="/" className="facebook"><i className="fab fa-facebook-f" /></Link>
                        <Link to="/" className="instagram"><i className="fab fa-instagram" /></Link>
                        <Link to="/" className="linkedin"><i className="fab fa-linkedin-in" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Trở về</h4>
                    <ul>
                      <li><i className="fas fa-chevron-right" /> <Link to="/">Trang chủ</Link></li>
                      <li><i className="fas fa-chevron-right" /> <Link to="/blog">Tin tức</Link></li>
                      <li><i className="fas fa-chevron-right" /> <Link to="/donate">Ủng hộ</Link></li>
                      <li><i className="fas fa-chevron-right" /> <Link to="/adoption">Nhận nuôi</Link></li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links">
                    <ul>
                      <li><i className="fas fa-chevron-right" /> <Link to="/volunteer">Tình nguyện viên</Link></li>
                      <li><i className="fas fa-chevron-right" /> <Link to="/contact">Liên hệ</Link></li>
                      <li><i className="fas fa-chevron-right" /> <Link to="/signin">Đăng nhập</Link></li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-6 footer-newsletter">
                    <h4>Thông tin liên lạc</h4>
                    <p>Chúng tôi sẽ cố gắng liên lạc sớm với bạn</p>
                    <form>
                      <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="copyright">
                © Copyright <strong><span>Petadoption</span></strong>. All Rights Reserved
              </div>
              <div className="credits">
                {/* All the links in the footer should remain intact. */}
                {/* You can delete the links only if you purchased the pro version. */}
                {/* Licensing information: https://bootstrapmade.com/license/ */}
                {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/groovin-free-bootstrap-theme/ */}
                Designed by <Link to="https://bootstrapmade.com/">Tran Thi Vy</Link>
              </div>
            </div>
          </footer>{/* End Footer */}
        </div>


      </div>
    )
  }
}

export default Home
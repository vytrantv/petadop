import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Slide extends Component {
    render() {
        return (
            <div>
     <section id="hero">
     <div className="hero-container">
       <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
         <ol className="carousel-indicators" id="hero-carousel-indicators" />
         <div className="carousel-inner" role="listbox">
           {/* Slide 1 */}
           <div className="carousel-item active" style={{background: 'url(/image/slide-1.jpeg)'}}>
             <div className="carousel-container">
               <div className="carousel-content">
                 <h2 className="animate__animated animate__fadeInDown"><span>Hãy nhận nuôi</span> đừng xua đuổi</h2>
                 <p className="animate__animated animate__fadeInUp">Loài vật cũng có tri giác và cảm xúc, chúng cũng biết đau, biết sợ hãi, biết yêu thương và muốn được yêu thương.</p>
                 <div>
                 <Link to="/adoption" className="btn-menu animate__animated animate__fadeInUp scrollto">Nhận nuôi</Link>
                 <Link to="/blog" className="btn-book animate__animated animate__fadeInUp scrollto">Xem thêm</Link>
                 </div>
               </div>
             </div>
           </div>
           {/* Slide 2 */}
          
           {/* Slide 3 */}
           <div className="carousel-item" style={{background: 'url(image/slide-3.png)'}}>
             <div className="carousel-background"><img src="image/slide-3.png" alt="" /></div>
             <div className="carousel-container">
               <div className="carousel-content">
                 <h2 className="animate__animated animate__fadeInDown">NHẬN NUÔI CHÓ CỎ!</h2>
                 <p className="animate__animated animate__fadeInUp">Khi bạn cứu một chú chó, có thể điều đó sẽ không là gì trong thế giới của bạn, nhưng bạn đã thay đổi thế giới của chúng rồi.</p>
                 <div>
                   <Link to="/adoption" className="btn-menu animate__animated animate__fadeInUp scrollto">Nhận nuôi</Link>
                   <Link to="/blog" className="btn-book animate__animated animate__fadeInUp scrollto">Xem thêm</Link>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
           <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true" />
           <span className="sr-only">Previous</span>
         </a>
         <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
           <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true" />
           <span className="sr-only">Next</span>
         </a>
       </div>
     </div>
   </section>{/* End Hero */}
   </div>
        )
    }
}

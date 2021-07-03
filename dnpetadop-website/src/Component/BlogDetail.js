import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class BlogDetail extends Component {
  render() {
    return (
      <div className="col-lg-6">
        <div className="blog-item wow fadeInUp" data-wow-delay="0.1s">
          <div className="blog-img">
            <img src={this.props.image} alt="Blog" />
          </div>
          <div className="blog-text">
            <h2>Lorem ipsum dolor sit amet</h2>
            <div className="blog-meta">
              <p><i className="far fa-user" />Admin</p>
              <p><i className="far fa-list-alt" />Web Design</p>
              <p><i className="far fa-calendar-alt" />01-Jan-2045</p>
              <p><i className="far fa-comments" />5</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet elit. Nullam commodo mattis mi. Nullam eu erat lectus. Proin viverra risus vitae luctus. Proin ut ante, vitae sapien. Fusce sem ac erat rhoncus, ornare mattis nisl massa et eros vitae pulvin
            </p>
            <Link className="btn" to="/blog">Read More <i className="fa fa-angle-right" /></Link>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Service extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
        <div className="class-wrap">
          <div className="class-img">
            <img src={this.props.image} alt="lavi-1" />
          </div>
          <div className="class-text">
            <div className="class-teacher">
              <img src={this.props.image} alt="lavi-1" />
              <h3>{this.props.children}</h3>
              <Link to="/">+</Link>
            </div>
            <h2>{this.props.name}</h2>
            <div className="class-meta">
              <p><i className="far fa-calendar-alt" />Sun, Tue, Thu</p>
              <p><i className="far fa-clock" />9:00 - 10:00</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

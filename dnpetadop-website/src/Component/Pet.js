import React, { Component } from 'react'

export default class Pet extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
        <div className="team-item">
          <div className="team-img">
            <img src={this.props.image} alt="lavi-1" />
            <div className="team-social">
            </div>
          </div>
          <div className="team-text">
            <h2>{this.props.children}</h2>
            <p><b>Tuổi:</b> {this.props.age}</p>
            <p><b>Giới tính:</b>  {this.props.sex}</p>
            <p><b>Tình trạng:</b> {this.props.status}</p>
          </div>
        </div>
      </div>
    )
  }
}

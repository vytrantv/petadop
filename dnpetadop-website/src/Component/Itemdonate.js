import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Itemdonate extends Component {
    render() {
        return (
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.0s">
                <div className="price-item">
                    <div className="price-header">
                        <div className="price-title">
                            <h2>{this.props.children}</h2>
                        </div>
                        <div className="price-prices">
                            <img src={this.props.image} alt="price-1"/>
                        </div>
                    </div>
                    <div className="price-body">
                            <div className="price-description">
                                <ul>

                                </ul>
                            </div>
                        </div>
                        <div className="price-footer">
                            <div className="price-action">
                                <Link to="/donate" className="btn" >Ủng hộ</Link>
                            </div>
                        </div>
                    </div>
                </div>
                )
    }
}

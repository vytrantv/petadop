import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Page extends Component {
    render() {
        return (
            <div>
            <div id="notfound">
            <div className="notfound">
              <div className="notfound-404">
                <h1>Oops!</h1>
                <h2>404 - The Page can't be found</h2>
              </div>
              <Link to="/">Go TO Homepage</Link>
            </div>
          </div>
             
            </div>
        )
    }
}

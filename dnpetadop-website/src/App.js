import React, { Component } from 'react'
import { BrowserRouter as Router, Route ,  Switch } from 'react-router-dom'; 
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Donate from './Component/Donate';
import Volunteer from './Component/Volunteer';
import Contact from './Component/Contact';
import Blog from './Component/Blog';
import Signin from './Component/Signin';
import Adoption from './Component/Adoption';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog}/>
          <Route path="/volunteer" exact component={Volunteer} />
          <Route path="/donate" exact component={Donate} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/adoption" exact component={Adoption} />
          </Switch>
        </div>
      </Router>
    
    );
  }
}
export default App;

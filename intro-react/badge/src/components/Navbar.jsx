import { Component } from 'react';
import "../styles/Navbar.css";

class Navbar extends Component {
  
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="#">
            <span className="font-weight-light">DevF</span>
            <span className="font-weight-bold">Online</span>
          </a>
        </div>
      </div>
    )
  }
}

export default Navbar
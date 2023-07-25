import React, { Component } from 'react'
import logo from '../logo-dark.png'
import logo2 from '../logo-light.png'
export default class Nav extends Component {
  render() {
    return (
      <>
      <nav onScroll={this.updateStyle}>
        <div className="logo">
            <img src={logo2} alt="" srcset="" />
        </div>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">News</a></li>
            <li><button className='contact_btn'>Contact</button></li>
        </ul>
        
      </nav>
      </>
    )
  }

   updateStyle() {
   
  }
}



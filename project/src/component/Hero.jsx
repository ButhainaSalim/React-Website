import React, { Component } from 'react'
import Nav from './Nav'
import heroImg from '../images/Hero.jpg'
import Goals from './Goals'
import Services from './Services'
export default class Hero extends Component {
  render() {
    return (
      <>
      
      <div className="hero" >
        <div className="dark-layer"></div>
      <Nav />

      <div className="intro">
        <h1>Time to change your business</h1>
      <p>Our small and medium business solutions helped grow over a hundred companies.</p>
      <button>Learn More</button>


      </div>

      
      <Goals />
      <Services />
      </div>
 
      
      </>
    )
  }
}

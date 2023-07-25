import React, { Component } from 'react'
import Service from './Service'
import servimg1 from '../images/serv1.jpg'
import servimg2 from '../images/serv2.jpg'
import servimg3 from '../images/serv3.jpg'

export default class Services extends Component {
  render() {
    return (
        <>
        <div className='serv-container'>
          <div className="serv-title">
            <h2>Our Services</h2>
            <p>This is a subtitle, feel free to change it!</p>
          </div>
          <div className="serv-items">
            <Service img = {servimg3} title="Item Title" />
            <Service img = {servimg2} title="Cool Ideas" />
            <Service img = {servimg1} title="Premium Support" />
          </div>

        </div>
      
      
        
        </>
    
    )
  }
}

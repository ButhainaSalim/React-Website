import React, { Component } from 'react'
import Goal from './Goal'
import icon1 from '../images/key.png'
import icon2 from '../images/thumbs-up-regular.png'
import icon3 from '../images/heart-regular.png'
export default class Goals extends Component {
  render() {
    return (
      <>
        <div className="goals">

          <Goal img={icon1} title="Time to change your business" />
          <Goal img={icon2} title="Small Business Discounts"/>
          <Goal img={icon3} title="Satisfied Clients"/>

        </div>

      </>
    )
  }
}

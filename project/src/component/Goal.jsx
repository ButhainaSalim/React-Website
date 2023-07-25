import React, { Component } from 'react'

export default class Goal extends Component {
  render() {
    return (
      <>
      <div className="info-box">
        <div className="header">
          <img src={this.props.img}/>
            <h5>{this.props.title}</h5>
        </div>
        <p>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo.</p>
      
      </div>
      </>
    )
  }
}

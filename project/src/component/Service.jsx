import React, { Component } from 'react'


export default class Service extends Component {
  render() {
    return (
      <div className='serv-box'>
        <div className="serv-img">
            <img src={this.props.img}/>
        </div>
        <div className="serv-info">
            <h5>{this.props.title}</h5>
            <p>Monec quis rhoncus augue. In fermentum eget neque tristique scelerisque. Morbi at elemen nisi. Quisque pellentesque.</p>
            <a href="#">Learn More </a>
        </div>
      </div>
    )
  }
}

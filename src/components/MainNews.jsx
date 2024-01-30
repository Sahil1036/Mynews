import React, { Component } from 'react'

export default class MainNews extends Component {
  // let {title,imageurl,description} = this.props;
  render() {
    return (
      <div style={{width:"50%",margin:"auto",color:"black"}}><div className="card text-bg-dark">
      <img src={this.props.imageurl} className="card-img" style={{opacity:"0.4"}}  alt="..."/>
      <div className="card-img-overlay">
        <h5 className="card-title">{this.props.title}</h5>
        <p className="card-text">{this.props.description}</p>
        <p className="card-text"><small>Last updated 3 mins ago</small></p>
      </div>
    </div></div>
    )
  }
}

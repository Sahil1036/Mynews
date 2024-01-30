import React, { Component } from "react";

export default class NewsBox extends Component {
  render() {
    let { title, description, imageurl, link,publishedAt,name } = this.props;
    return (
      <>
        <div className="card m-2" style={{ width: "20rem" }}>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
        <span className="badge rounded-pill text-bg-secondary py-2 px-4 float-end ">{(name).slice(0,15)}</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              <small className="text-body-secondary">Last updated on {new Date(publishedAt).toGMTString()}</small>
            </p>
            <p className="card-text">{description}</p>
            <a href={link} target="_blank" className="btn btn-primary">
              read more
            </a>
          </div>
        </div>
      </>
    );
  }
}

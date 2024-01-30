import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
export default class navbar extends Component {
 
  constructor(){
    super();
     this.state={
     search:""
     };
    }
  render() {
    return (
      <div>
        <nav className="fixed-top navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">MyNews</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-capitalize">
            <li className="nav-item">
              <NavLink className="nav-link active " aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/business">business</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/general">general</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/entertainment">entertainment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/health">health</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/science">science</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sports">sports</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technology">technology</NavLink>
            </li>
            
              </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" onChange={async(e)=>{
     await this.setState({
        search:e.target.value })
        console.log(this.state.search)
    }
    } aria-label="Search"/>
            <button className="btn btn-outline-primary" onClick={async(e)=>{
                e.preventDefault(); 
                await this.props.setQuery(this.state.search);
                console.log(this.state.search)}} type="submit"><NavLink className="nav-link" to="/search">Search </NavLink></button>
          </form>
        </div>
      </div>
    </nav></div>
    )
  }
}



import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNews from "./components/MainNews";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      progress:0,
      query:""
    };
  }

  setProgress=(progress)=>{
    this.setState({
      progress:progress
    });
  }

  setQuery=(query)=>{
    this.setState({
      query:query
    });
  }

  render() {
    return (
      <div>
        <BrowserRouter basename="/Mynews">
        <Navbar setQuery={this.setQuery}/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={this.state.progress=0}
      />
       <Routes>
       <Route exact path="/" element={<News setProgress={this.setProgress}  key="entertainment"category="entertainment" />} /> 
            <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business" category="business" />} /> {/* 👈 Renders at /app/ */}

            <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" category="entertainment" />} /> 

            <Route exact path="/general" element={<News setProgress={this.setProgress}  key="general" category="general" />} /> 
            
            <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" category="health" />} /> 
            
            <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" category="science" />} /> 
            
            <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" category="sports" />} /> 
            
            <Route  exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" category="technology" />} /> 

            <Route  exact path="/search" element={<News setProgress={this.setProgress}  key="search" query={this.state.query}  category=""/>} /> 

          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}


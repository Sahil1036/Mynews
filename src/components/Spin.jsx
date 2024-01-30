import React, { Component } from 'react'
import loading from './loading.gif'
export default class Spin extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="error 404...." />
      </div>
    )
  }
}

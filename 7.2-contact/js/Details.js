import React from 'react'
import { Link } from 'react-router'
import Home from './home'

export default React.createClass({
  render() {
    return (
      <section>
        <button className="nav_button"><Link to="/">Back</Link></button>
        <p> {this.props.params.name} </p>
        <p> {this.props.params.email} </p>
        <p> {this.props.params.phone} </p>
        <p> {this.props.params.location} </p>
      </section>
    )
  }
})

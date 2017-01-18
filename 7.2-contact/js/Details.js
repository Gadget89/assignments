import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        <h1>Contact Details</h1>
        <button className="nav_button"><Link to="/">Back</Link></button>
        <h1> {this.props.params.name} </h1>
      </section>
    )
  }
})

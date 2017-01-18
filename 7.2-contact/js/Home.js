import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return(
      <section>
        <h1>My Peeps</h1>
        <div className="nav_wrapper">
          <button className="nav_button"><Link to="/Details">Details</Link></button>
          
        </div>
      </section>
    )
  }
})

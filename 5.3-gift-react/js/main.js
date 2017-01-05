// Main Javascript
// Grabb react from node_modules
import React from 'react'

// All of your UI centered code goes INSIDE of the createClass
export default React.createClass({
  render() {
    // Inside of the <h1> using this.state is called BINDING
    return (
      <section>
        <h1> GIFTS TO BUY </h1>
        <form>
          <input
            placeholder = "type the gift to buy here"
            type = "text"
            value = "">
          </input>
          <input
            type = "submit"
            value = "ADD">
          </input>
        </form>
      </section>
    )
  }
})

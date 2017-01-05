// Main Javascript
// Grabb react from node_modules
import React from 'react'

// All of your UI centered code goes INSIDE of the createClass
export default React.createClass({
  render() {
    // Inside of the <h1> using this.state is called BINDING
    return (
      <section className ="body">
      <h1 className = "title"> GIFTS TO BUY </h1>
      <main className = "main">
        <form className = "postForm">
          <input
            className = "postForm__text"
            placeholder = "type the gift to buy here"
            type = "text">
          </input>
          <input
            className = "addButton"
            type = "submit"
            value = "ADD">
          </input>
        </form>
        <section>
        <article class="posts">
          <p class="post__text">
          </p>
          <p
            class="total"
            value="">total
          </p>
        </article>
      </section>
      </main>
    </section>
    )
  }
})

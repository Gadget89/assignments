// Main Javascript
// Grabb react from node_modules
import React from 'react'

// All of your UI centered code goes INSIDE of the createClass
export default React.createClass({
  getInitialState: function() {
    return {
      inputValue: ''
    };
  },
  onAddButtonClick(e) {
     e.preventDefault();
    var currentInputValue = this.state.inputValue;
    // Add var for output to add to bottom of list
  },
  updateInputValue: function(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  },
  render() {
    return (
      <section className ="body">
        <h1 className = "title"> GIFTS TO BUY </h1>
        <main className = "main">
          <form className = "postForm">
            <input
              className = "postForm__text"
              onChange={ this.updateInputValue }
              placeholder = "type the gift to buy here"
              type = "text"
              value={ this.state.inputValue }>
            </input>
            <input
              className = "addButton"
              type = "submit"
              value = "ADD"
              onClick={ this.onADDButtonClick }>
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

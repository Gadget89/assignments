import React from 'react'
import Validator from 'validator'

export default React.createClass({
  // Set initial state
  getInitialState(){
    return{
      isCreditCardValid: false,
      messageForOutput: "",
      newCardInput: ""
    }
  },
  // This function will run on change to the input form
  onCardChange(e){
    // Create variable to get value from form input
    var newCreditCard = e.target.value
    // Set state of new card input
    this.setState({newCardInput:newCreditCard})
  },
  // This function will run on submit
  onSubmit(e){
    e.preventDefault()
    // Use validator to return boolean from target value
    var validCard = Validator.isCreditCard(this.state.newCardInput)
    // Set state to boolean returned from validator
    this.setState({isCreditCardValid:validCard})
    // If boolean is false return message for output to "Card Invalid"
    if (validCard === false) {
      return this.setState({messageForOutput:"Card Invalid"})
      // For a boolean of true return message for output to "Card Valid"
    } else {
      return this.setState({messageForOutput:"Card Valid"})
    }
  },
  render() {
    return(
      <section>
        <p>Please enter credit card number here</p>
        <form>
          <input
            type="text"
            pattern="[0-9]{16}"
            maxLength="16"
            onChange={this.onCardChange} />
          <input
            type="submit"
            onClick={this.onSubmit}/>
        </form>
        <p
          className={this.state.isCreditCardValid ? "valid" : "invalid"}>{this.state.messageForOutput}</p>
      </section>
    )
  }
})

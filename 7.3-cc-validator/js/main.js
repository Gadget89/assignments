import React from 'react'
import Validator from 'validator'

export default React.createClass({
  // Set initial state
  getInitialState(){
    return{
      isCreditCardValid: false
    }
  },
  onCardChange(e){
    // Use validator to return boolean from target value
    var isCreditCard = Validator.isCreditCard(e.target.value);
    this.setState({isCreditCardValid:isCreditCard})
  },
  onSubmit(e){
    e.preventDefault()
    var CardValid = this.state.isCreditCardValid;
    // need to set state here and return with if statement maybe?
  },
  render() {
    return(
      <section>
        <form className={this.state.isCreditCardValid ? "valid" : "invalid"}>
          <input type="text" onChange={this.onCardChange} />
          <input type="submit"/>
        </form>
      </section>
    )
  }
})

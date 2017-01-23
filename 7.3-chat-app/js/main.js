// main Javascript
import React from 'react'
import { ajax } from 'jquery'

export default React.createClass({
  componentDidMount() {
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/nicolasroybal-app",
      dataType: "json",
      success: this.onAjaxInitialLoadSuccess
    })
  },
  getInitialState() {
    return {
    newMessage: "",
    history: []
   }
  },
  onAjaxInitialLoadSuccess(response){
    var chatAppended = response.reverse()
    this.setState({
      history: chatAppended
    })
  },
  onPostAjaxLoadSuccess(response){
    this.setState({
      history: this.state.history.concat(response)
    })
  },
  onMessageChange(e) {
    var currentMessageInput = e.target.value
    this.setState({
      newMessage: currentMessageInput
    })
  },
  onSubmit(e) {
    e.preventDefault()
    var addThisMessage = this.state.newMessage
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/nicolasroybal-app",
      dataType: "json",
      type: "post",
      data: {
        addThisMessage
      },
      success: this.onPostAjaxLoadSuccess
    })
  },
  render() {
    return(
      <section>
        <aside>
          <h1> Chat </h1>
        </aside>
        <article>
          {
            this.state.history.map((chat, i)=>{
              return <p><span key={i}> { chat.addThisMessage } </span></p>
            })
          }
        <form>
          <input onChange={this.onMessageChange} placeholder="Message" type="text"/>
          <input onClick={ this.onSubmit } type="submit"/>
        </form>
        </article>
      </section>
    )
  },
})

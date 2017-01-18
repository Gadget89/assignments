import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState(){
    return {
      user: {
        0: {
          name: "JD Isaacks",
          email: "jdIsaacks@email.com",
          phone: 2439876543,
          location: "Washington, DC",
        },
        1: {
          name: "Brit Butler",
          email: "britButler@email.com",
          phone: 9301257390,
          location: "San Diego, CA",
        },
        2: {
          name: "Jo Albright",
          email: "joAlbright@email.com",
          phone: 6294620461,
          location: "Austin, TX",
        },
        3: {
          name: "Tim Whitacre",
          email: "timWhitacre@email.com",
          phone: 8016294624,
          location: "Albuquerque, NM",
        }
      }
    }
  },
  render() {
    return (
      <section>
        <h1>This works</h1>
      </section>
    )
  }
})

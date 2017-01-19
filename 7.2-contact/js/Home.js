import React from 'react'
import { Link } from 'react-router'
import Details from './details'

export default React.createClass({
  getDefaultProps(){
    return {
      user: [
        {
          name: "JD Isaacks",
          email: "jdIsaacks@email.com",
          phone: "(243)987-6543",
          location: "Washington, DC",
        },
        {
          name: "Brit Butler",
          email: "britButler@email.com",
          phone: "(930)125-7390",
          location: "San Diego, CA",
        },
        {
          name: "Jo Albright",
          email: "joAlbright@email.com",
          phone: "(629)462-0461",
          location: "Austin, TX",
        },
        {
          name: "Tim Whitacre",
          email: "timWhitacre@email.com",
          phone: "(801)629-4624",
          location: "Albuquerque, NM"
      }
    ]
  }
},
  render() {
    return(
      <section>
        <h1>My Peeps</h1>
        {
           this.props.user.map((contact, i) => {
           return <Link to={`Details/${contact.name}/${contact.email}/${contact.phone}/${contact.location}`} key={i} className="user_list"> {contact.name} </Link>
          })
        }
      </section>
    )
  }
})

// Main Javascript

import React from 'react'

export default React.createClass({

    render() {
      return (

    <main className="main">
      <section
        className="article_container">
        <img
          className="author_profile_image"
          src="assets/author_profile_img.jpg">
        </img>
        <div>
          <a className="author_profile_name">
            Instant Articles
          </a>
          <p className="article_publish_date">
            May 13, 2015
          </p>
          <p>
            Welcome! To see these stories in the Instant Articles format, you must be on the latest version of the Facebook app for iPhone or Android.
          </p>
          <p>
            Learn more about this new tool for publishers at <a href="#" className="fb_blue">instantarticles.fb.com.</a>
          </p>
        </div>
      </section>
    </main>
      )
    }
})

// Main Javascript

import React from 'react'
export default React.createClass({

  getInitialState() {
    return {
      comments: [{
        commenterProfileImg: "assets/author_profile_img.jpg",
        commenterProfileName: "Sunesh Bhasi",
        commenterCommentBodyText: "Hi guys. shall we, get any assistance from facebook marketing team to post articles from our website in instant articles.",
        commenterCommentDate: "5 hrs",
        id: 0
      }],
    }
  },
    render() {
      return (
        <main className="main">
          <section className="article_container">
            <div>
              <img className="author_profile_image" src="assets/author_profile_img.jpg"></img>
            <div className="author_info">
              <a className="author_profile_name">Instant Articles</a>
              <br></br>
              <p className="article_publish_date">May 13, 2015</p>
            </div>
              <p className="post_content">Welcome! To see these stories in the Instant Articles format, you must be on the latest version of the Facebook app for iPhone or Android.</p>
              <p className="post_content">Learn more about this new tool for publishers at <a href="#" className="fb_blue">instantarticles.fb.com.</a></p>
            <div className="user_interaction_section">
              <button className="like_button">Like</button>
              <button className="comment_button">Commment</button>
            </div>
          </div>
        </section>
        <section>
          {
            this.state.comments.map((comment, i) => {
              return <article key={i}>
                <section className="article_container">
          <div className="commenter_post">
            <div className="commenter_post_content">
              <img className="author_profile_image" src= {comment.commenterProfileImg} ></img>
              <p className="commenter_post_content"><b>{comment.commenterProfileName} </b>{comment.commenterCommentBodyText}</p>
            </div>
            <p className="commenter_publish_date">{comment.commenterCommentDate}</p>
          </div>
      </section>
    </article>
  })
}
</section>
    </main>
    )
  }
})

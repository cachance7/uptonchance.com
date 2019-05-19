import React from 'react'
import Article from '../Article'
import Album from '../Album'
import pic01 from '../../images/glance.jpg'


class Story extends Article {
  renderContent() {
    return (
      <div>
        <span className="image main">
          <img src={pic01} alt="" />
        </span>
        <h3>Meeting</h3>
        <p>We met serendipitously late one Saturday night in March of 2016. A local Seattle music venue, Lo-Fi, was holding a 90s dance party and our respective friend groups saw fit to attend. Had we not crossed paths that night, it is unlikely we ever would have met!</p>
        <h3>Dating</h3>
        <p>In the course of a few short years, we have traveled across the globe, camped and hiked all over the Pacific Northwest, and had many late nights on the dance floor.</p>
        <h3>Engagement</h3>
        <blockquote>Come on an adventure with me...</blockquote>
        <p>One sunny Friday morning late last September, we skipped work and took a trip to San Juan Island. It was a beautiful autumn day to spend on the island — sightseeing and enjoying the outdoors. We took a bottle of wine to the beach that the evening and at sunset, Casey proposed to Lauren. She said yes!</p>
        <Album />
      </div>
    )
  }
}
Story.title = 'Story'

export default Story

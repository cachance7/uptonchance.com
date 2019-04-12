import React from 'react'
import Article from '../../components/Article'
import Hotel from '../../components/Hotel'
import pic02 from '../../images/pic02.jpg'

class Stay extends Article {
  renderContent() {
    return (
      <div>
        <h2 className="major">Stay</h2>
        <span className="image main">
          <img src={pic02} alt="" />
        </span>
        <p />
        <Hotel phone="" addr1="" zip="" />
      </div>
    )
  }
}

export default Stay

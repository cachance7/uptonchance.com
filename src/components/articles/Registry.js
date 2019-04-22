import React from 'react'
import Article from '../Article'
import kalalau from '../../images/kalalau.jpg'
// import Map from '../../components/Map'

class Registry extends Article {
  renderContent() {
    return (
      <React.Fragment>
        <span className="image main">
          <img src={kalalau} alt="" />
        </span>
        <p>We are just so happy to have you at the wedding — gifts are greatly appreciated but certainly not expected. However, if you would like to give a gift, please consider contributing to <a rel="noopener noreferrer" target="_blank" src="">our Honeyfund <b>LINK NEEDED</b></a> (either via link or with cash). Any gifts we receive will go towards our honeymoon in Hawaii, exploring the islands.</p>
        <p>We already live together and love the space we have built. An adventure to a new place sounds to us like a fantastic way to start our life together!</p>
      </React.Fragment>
    )
  }
}
Registry.title = 'Gift'

export default Registry

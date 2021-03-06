import React from 'react'
import Article from '../Article'
import kalalau from '../../images/kalalau.jpg'
import honeyfund from '../../images/honeyfund3.png'
// import Map from '../../components/Map'

class Registry extends Article {
  renderContent() {
    return (
      <React.Fragment>
        <span className="image main">
          <img src={kalalau} alt="" />
        </span>
        <p>We are so happy to have you at the wedding — gifts are greatly appreciated but not expected. However, if you would like to give a gift, please consider contributing to <a rel="noopener noreferrer" target="_blank" href="https://honeyfund.com/wedding/uptonchance">our Honeyfund</a> (either via link or with cash/check). Any gifts we receive will go toward activities on our honeymoon in Hawaii, exploring the islands.</p>
        <p>We already live together and love the space we built. We look forward to starting our marriage with a beautiful island adventure. ❤️ ✈️ 🏝️</p>
        <div style={{
          paddingLeft: "24px",
          background: "white",
          borderRadius: "5px",
          width: "200px",
          margin: "0 auto"}}>
          <a href="http://www.honeyfund.com/wedding/uptonchance" rel="noopener noreferrer" target="_blank" style={{
            borderRadius: "5px",
            display: "block",
            width: "150px",
            height: "75px",
          }}>
          <img style={{
            width: "150px",
            height: "75px",
          }} src={honeyfund} />
        </a>
          <p style={{margin: 0, padding:0, fontSize: "10px", textAlign: "center"}}></p>
        </div>
      </React.Fragment>
    )
  }
}
Registry.title = 'Gift'

export default Registry

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Article from '../Article'
import Hotel from '../Hotel'
import pic02 from '../../images/pic02.jpg'

class Stay extends Article {
  renderContent() {
    return (
      <StaticQuery
        query={graphql`
          fragment Hotel on HotelsJson {
            name
            description
            address1
            address2
            phone
            website
            map
          }

          {
            hotels: allHotelsJson {
              nodes {
                ...Hotel
              }
            }
          }
        `
        }
        render={data => (
          <div>
            <span className="image main">
            <img src={pic02} alt="" />
            </span>
            <p />
            {
              data.hotels.nodes.map((hotel, idx) => {
                return <Hotel
                  key={idx}
                  name={hotel.name}
                  description={hotel.description}
                  phone={hotel.phone}
                  address1={hotel.address1}
                  address2={hotel.address2}
                  website={hotel.website}
                  map={hotel.map}
                />
              })
            }
          </div>
        )}
      />
    )
  }
}
Stay.title = 'Stay'

export default Stay

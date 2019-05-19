import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Article from '../Article'
import Hotel from '../Hotel'
import seattle from '../../images/seattle-cityscape.jpg'

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
            <img src={seattle} alt="" />
            </span>
            <p>The venue is accessible from any lodging in Seattle. The Capitol Hill and University District neighborhoods are especially convenient. We recommend looking at hotel and <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.airbnb.com/s/Seattle--WA--United-States/homes?refinement_paths%5B%5D=%2Fhomes&query=Seattle%2C%20WA%2C%20United%20States&place_id=ChIJVTPokywQkFQRmtVEaUZlJRA&search">Airbnb</a> options in the city and choosing what best meets your needs.</p><p>Below are a few options to get you started.</p>
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

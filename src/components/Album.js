import 'react'
import { StaticQuery, graphql } from 'gatsby'
import Gallery from 'react-grid-gallery'
/** @jsx jsx */
import { jsx } from "@emotion/core"

const Album = () => (
  <StaticQuery
    query={graphql`
      fragment Photo on PhotosJson {
        src
      }

      {
        photos: allPhotosJson {
          nodes {
            ...Photo
          }
        }
      }
    `
    }
    render={data => (
      <Gallery images={data.photos.nodes.map(photo => {
        return {
          src: photo.src,
          thumbnail: photo.src,
        }
      })} />
    )}
  />
)

//      <div className="pa-embed-player" css={{width:"100%", height: "480px", display:"none"}}
//        data-link="https://photos.app.goo.gl/PTKwsCJ6cdVBv31d8"
//        data-title="Lauren + Casey"
//        data-description="37 new photos · Album by Casey Chance">
//        {
//          data.photos.nodes.map((photo, idx) => {
//            return <img
//              key={idx}
//              data-src={photo.src}
//            />
//          })
//        }
//      </div>

export default Album

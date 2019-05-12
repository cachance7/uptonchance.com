import 'react'
import { StaticQuery, graphql } from 'gatsby'
import Gallery from 'react-grid-gallery'
/** @jsx jsx */
import { jsx } from '@emotion/core'
// import styles from "../assets/scss/components/_album.scss"

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
    `}
    render={data => (
      <Gallery
        backdropClosesModal={true}
        enableLightbox={true}
        enableImageSelection={true}
        images={data.photos.nodes.map(photo => {
          return {
            src: photo.src,
            thumbnail: photo.src,
            // thumbnailWidth: 239,
            // thumbnailHeight: 239,
          }
        })}
      />
    )}
  />
)

export default Album

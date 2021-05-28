import { useEffect, useState } from 'react'

import images from 'public/images/__credits'

const BgImage = () => {
  const [ imageId, setImageId ] = useState(false)

  // get random image
  useEffect(() => {
    if (!imageId) {
      const imageIds = Object.keys(images)
      const index = Math.floor(Math.random() * imageIds.length)
      setImageId(imageIds[index])
    }
  }, [ imageId ])

  return (
    <div className="bg">
      { imageId &&
        <>
          <img src={`/images/${imageId}.jpg`} className="bg" alt="" width="1920" height="1080" loading="lazy" />
          <a className="bg-credit" href={images[imageId].user_url} target="_blank" rel="noopener noreferrer">
            Photo by { images[imageId].user_name } on Unsplash
          </a>
        </>
      }
    </div>
  )
}

export default BgImage

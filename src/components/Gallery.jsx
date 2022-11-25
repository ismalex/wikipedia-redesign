import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import GalleryItem from './GalleryItem'

export default function Gallery() {
  const { randomArticles } = useContext(GlobalContext)

  if (randomArticles.length === 0) return 'Loading...'

  return (
    <div className="masonry-grid">
      {randomArticles.map(({ title, original, extract, pageid }) => (
        <GalleryItem
          key={title}
          pageLinkId={pageid}
          title={title}
          thumbnailSource={original?.source}
          shortDescription={extract}
        />
      ))}
    </div>
  )
}

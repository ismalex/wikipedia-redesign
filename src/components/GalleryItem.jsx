import React from 'react'
import WikiLink from './WikiLink'
import { linkItemBaseURL, imgSourceFallBack } from '../api/constant-info'

export default function GalleryItem({
  pageLinkId,
  title,
  thumbnailSource = imgSourceFallBack,
  shortDescription,
}) {
  return (
    <div className="review-item">
      <img alt={title} className={'m-auto'} src={thumbnailSource} />
      <div className="border-y-2 border-black p-2 mt-2">
        <WikiLink href={linkItemBaseURL + pageLinkId}>
          <h3>{title}</h3>
        </WikiLink>
        <p>{shortDescription}</p>
      </div>
    </div>
  )
}

import React from "react";
import WikiLink from "./WikiLink";
import { IMAGE_SOURCE_FALLBACK, MAX_ARTICLES_SMALL_SCREENS, WIKIPEDIA_URLS } from "../consts";

export default function GalleryItem({
  id,
  pageLinkId,
  title,
  thumbnailSource = IMAGE_SOURCE_FALLBACK,
  shortDescription,
}) {
  return (
    <div
      className={id <= MAX_ARTICLES_SMALL_SCREENS ? "masonry-item" : "masonry-item-hidden"}>
      <img alt={title} className="m-auto" src={thumbnailSource} />
      <div className="border-y-2 border-black p-2 mt-2">
        <WikiLink href={`${WIKIPEDIA_URLS.page_base_url}${pageLinkId}`}>
          <h3>{title}</h3>
        </WikiLink>
        <p>{shortDescription}</p>
      </div>
    </div>
  );
}

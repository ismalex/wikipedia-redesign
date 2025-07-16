import React from "react";
import { useGlobalContext } from "../hooks";
import GalleryItem from "./GalleryItem";

export default function Gallery() {
  const { isRandomLoading, randomArticlesImages } = useGlobalContext();

  if (isRandomLoading) return <div>Loading...</div>;

  return (
    <div className="masonry-grid">
      {randomArticlesImages.map(
        ({ title, thumbnail, extract, pageid }, index) => (
          <GalleryItem
            id={index}
            key={title}
            pageLinkId={pageid}
            title={title}
            thumbnailSource={thumbnail?.source}
            shortDescription={extract}
          />
        )
      )}
    </div>
  );
}

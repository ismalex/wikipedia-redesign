import React from "react";
import { useGlobalContext } from "../hooks";
import WikiLink from "./WikiLink";
import { WIKIPEDIA_URLS } from "../consts";

export default function OnThisDay() {
  const { isOnThisDayLoading, onThisDayArticles } = useGlobalContext();

  if (isOnThisDayLoading) return <div>Loading...</div>;

  return onThisDayArticles.map(({ year, text, pages }) => {
    const [firstPage] = pages;

    return (
      <div className="flex mb-2 gap-1 cursor-pointer">
        <div className="text-sm">{year}</div>
        <span> – </span>
        <WikiLink className="text-sm" href={`${WIKIPEDIA_URLS.page_base_url}${firstPage}`}>
          {text}
        </WikiLink>
      </div>
    );
  });
}

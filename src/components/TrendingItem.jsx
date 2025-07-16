import React from "react";
import WikiLink from "./WikiLink";
import { BsEyeFill } from "react-icons/bs";
import { WIKIPEDIA_URLS } from "../consts";

export default function TrendingItem({ title, views }) {
  return (
    <div className="flex gap-3 items-center justify-between p-2 border-black border-t-2 last:border-b-2">
      <div className="flex-1 min-w-[200px]">
        <WikiLink href={`${WIKIPEDIA_URLS.trending_page_base_url}${title}`}>
          <h2 className="break-words">{title}</h2>
        </WikiLink>
      </div>
      <div className="flex items-center gap-2 text-gray-400 flex-shrink-0">
        <h3 className="font-medium whitespace-nowrap">
          {Intl.NumberFormat("no-NO").format(views)}
        </h3>
        <BsEyeFill className="text-2xl" />
      </div>
    </div>
  );
}

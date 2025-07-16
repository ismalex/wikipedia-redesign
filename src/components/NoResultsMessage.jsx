import React from "react";
import { WIKIPEDIA_URLS } from "../consts";

export default function NoResultsMessage({ notFoundQuery }) {
  return (
    <div className="p-2">
      <div className="mb-2">There were no results matching the query.</div>
      <div className="text-sm">
        The page "<span className="font-semibold">{notFoundQuery}</span>" does not exist. You can 
        {" "}
        <a
          href={WIKIPEDIA_URLS.draft_article}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline">
          create a draft and submit it for review
        </a>
        {" "}
        or 
        {" "}
         <a
          href={WIKIPEDIA_URLS.new_redirect}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline">
         request that a redirect be created
        </a>.
      </div>
    </div>
  );
}

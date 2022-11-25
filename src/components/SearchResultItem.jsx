import React from 'react'
import WikiLink from './WikiLink'
import { linkItemBaseURL } from '../api/constant-info'

export default function SearchResultItem({
  query,
  title,
  smallDescription,
  pageLinkId,
}) {
  const regex = new RegExp(`${query}`, 'ig')

  const foundMatch = title.match(regex)
  const styledTitle = title.replaceAll(regex, `<strong>${foundMatch}</strong>`)

  return (
    <div className="border-t-2 border-black p-2">
      <WikiLink href={linkItemBaseURL + pageLinkId}>
        <h3 dangerouslySetInnerHTML={{ __html: styledTitle }} />
      </WikiLink>
      <div
        className="search-description"
        dangerouslySetInnerHTML={{ __html: smallDescription }}
      />
    </div>
  )
}

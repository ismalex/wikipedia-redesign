import React from 'react'
import WikiLink from '../components/WikiLink'
import {
  licenseNotes,
  instaKkkraterrr,
  githubIsmalex,
} from '../api/constant-info'

export default function License() {
  return (
    <div>
      <div className="text-xs">{licenseNotes}</div>
      <div className="text-xs flex flex-row gap-4 mb-4 md:flex-col md:gap-0 md:mb-0">
        <div>
          design:
          <WikiLink href={instaKkkraterrr}>
            <span>@kkkarterrr</span>
          </WikiLink>{' '}
        </div>
        <div>
          code:{' '}
          <WikiLink href={githubIsmalex}>
            <span>@ismalex</span>
          </WikiLink>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import WikiLink from './WikiLink'
import {
  licenseNotes,
  instaKkkraterrr,
  githubIsmalex,
} from '../api/constant-info'

export default function LicenseInfo() {
  return (
    <>
      <div className="text-xs font-medium leading-3">{licenseNotes}</div>
      <div className="text-xs font-semibold flex flex-row gap-4 mb-4 md:flex-col md:gap-0 md:mb-0">
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
    </>
  )
}

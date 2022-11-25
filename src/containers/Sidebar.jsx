import React from 'react'
import { Link } from 'react-router-dom'
import WikiLink from '../components/WikiLink'
import { donateURL } from '../api/constant-info'
import License from '../components/License'

export default function Sidebar() {
  return (
    <aside className="hidden md:flex">
      <div className="sticky top-[60px] flex flex-col justify-between h-[90vh]">
        <ul>
          <li className="link">
            <Link to={`/wikipedia-redesign`}>Main Page</Link>
          </li>
          <li>My account</li>
          <li>Contents</li>
          <li>Random article</li>
          <li>
            <WikiLink href={donateURL}>
              <span>Donate</span>
            </WikiLink>
          </li>
        </ul>
        <div>
          <ul className="mb-4">
            <li>Privacy policy</li>
            <li>About Wikipedia</li>
            <li>Disclaimers</li>
            <li>Contact Wikipedia</li>
            <li>Mobile view</li>
            <li>Developers</li>
            <li>Statistics</li>
            <li>Cookie statement</li>
          </ul>
          <License/>
        </div>
      </div>
    </aside>
  )
}

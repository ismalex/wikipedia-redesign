import React from "react";
import { Link } from "react-router-dom";
import WikiLink from "../components/WikiLink";
import LicenseInfo from "../components/LicenseInfo";
import { MENU_ITEMS, WIKIPEDIA_URLS } from "../consts";
import Logo from "../components/Logo";

export default function Sidebar() {
  return (
    <aside className="hidden md:block">
      <div className="sticky top-4 flex flex-col justify-between h-[96vh]">
        <div>
          <Logo />
          <ul className="leading-4 font-medium mt-3">
            <li className="link">
              <Link to={`/wikipedia-redesign`}>Main Page</Link>
            </li>
            {MENU_ITEMS.top.map(({ id, description }) => (
              <li key={`top-${id}`} className="link">
                {description}
              </li>
            ))}
            <li>
              <WikiLink href={WIKIPEDIA_URLS.donate}>Donate</WikiLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="leading-4 font-medium">
            {MENU_ITEMS.bottom.map(({ id, description }) => (
              <li key={`bottom-${id}`} className="link">
                {description}
              </li>
            ))}
          </ul>
          <LicenseInfo />
        </div>
      </div>
    </aside>
  );
}

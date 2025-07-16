import React from "react";
import WikiLink from "./WikiLink";
import { GITHUB_ISMALEX, INSTAGRAM_CARTER, LICENSE_NOTES } from "../consts";


export default function LicenseInfo() {
  return (
    <div className="mt-5">
      <div className="text-xs font-medium leading-3">{LICENSE_NOTES}</div>
      <div className="text-[10px] font-semibold mt-3">
        <div>WIKIPEDIA REDESIGN</div>
        <div className="flex flex-row gap-3 -mt-1">
          <div>
            design:
            <WikiLink className="ml-1" href={INSTAGRAM_CARTER}>
              @kkkarterrr
            </WikiLink>
          </div>
          <div>
            code:
            <WikiLink className="ml-1" href={GITHUB_ISMALEX}>
              @ismalex
            </WikiLink>
          </div>
        </div>
      </div>
    </div>
  );
}

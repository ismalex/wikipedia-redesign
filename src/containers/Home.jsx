import React from "react";
import SectionTitle from "../components/SectionTitle";
import Gallery from "../components/Gallery";
import Trending from "../components/Trending";
import ProjectList from "../components/ProjectList";
import LicenseInfo from "../components/LicenseInfo";

import OnThisDay from "../components/OnThisDay";

export default function Home() {
  return (
    <>
      <section>
        <SectionTitle title="Trending now" colorClassName="text-green-500" />
        <Trending />
      </section>
      <section>
        <SectionTitle title="For you" colorClassName="text-sky-500" />
        <Gallery />
      </section>
      <section className="mb-14">
        <div className="flex gap-4 ">
          <div className="basis-full lg:basis-1/2">
            <SectionTitle title="On This Day" colorClassName="text-blue-300" />
            <OnThisDay />
          </div>
          <div className="hidden lg:block">
             <SectionTitle
              title="Did you know ..."
              colorClassName="text-green-300"
            />
          </div>
        </div>
      </section>
      <section className="mb-14">
        <SectionTitle title="Wikipedia's sister projects" />
        <ProjectList />
      </section>
      <section className="block md:hidden">
        <LicenseInfo />
      </section>
    </>
  );
}

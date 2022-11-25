import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Gallery from '../components/Gallery'
import Trending from '../components/Trending'
import ProjectList from '../components/ProjectList'
import WikiLink from '../components/WikiLink'
import {
  wikiMediaFoundationURL,
  volunteerProjectsURL,
} from '../api/constant-info'
import License from '../components/License'

export default function Home() {
  return (
    <>
      <section className="mt-14">
        <SectionTitle title="Trending now" colorClassName="text-green-500" />
        <Trending />
      </section>
      <section className="mt-14">
        <SectionTitle title="For you" colorClassName="text-sky-500" />
        <Gallery />
      </section>
      <section className="mt-14 mb-14">
        <div className="flex">
          <div className=" basis-1/2">
            <SectionTitle
              title="Did you know ..."
              colorClassName="text-green-300"
            />
          </div>
          <div className="">
            <SectionTitle title="In the news" colorClassName="text-blue-300" />
          </div>
        </div>
      </section>
      <section className="mt-14 mb-14">
        <SectionTitle title="Wikipedia's sister projects" />
        <p>
          Wikipedia is written by volunteer editors and hosted by the{' '}
          <WikiLink href={wikiMediaFoundationURL}>
            <strong>Wikimedia Foundation</strong>
          </WikiLink>
          , a non-profit organization that also hosts a range of other volunteer{' '}
          <WikiLink href={volunteerProjectsURL}>
            <strong>projects</strong>
          </WikiLink>
          :
        </p>
        <ProjectList />
      </section>
      <License />
    </>
  )
}

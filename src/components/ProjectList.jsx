import React from 'react'
import WikiLink from './WikiLink'
import { projectListInfo } from '../api/constant-info'

export default function ProjectList() {
  return (
    <ul className="flex flex-wrap mt-4">
      {projectListInfo.map((project) => (
        <li key={project.title} className="flex basis-1/2 lg:basis-1/3 ">
          <div className="min-w-[50px] p-2">
            <WikiLink href={project.url}>
              <img
                decoding="async"
                className="m-auto"
                width={project.image.width}
                height={project.image.height}
                alt={project.image.alt}
                src={project.image.source}
                srcSet={project.image.sourceSet}
                data-file-width="1024"
                data-file-height="1376"
              />
            </WikiLink>
          </div>
          <div className=" p-2">
            <WikiLink href={project.url}>{project.title}</WikiLink>
            <br />
            {project.description}
          </div>
        </li>
      ))}
    </ul>
  )
}

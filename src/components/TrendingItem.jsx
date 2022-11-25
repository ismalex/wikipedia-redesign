import React from 'react'
import { BsEyeFill } from 'react-icons/bs'
import WikiLink from './WikiLink'
import { trendingItemBaseURL } from '../api/constant-info'

export default function TrendingItem({ title, views }) {
  const formatedViews = new Intl.NumberFormat('no-NO').format(views)

  return (
    <div className="flex justify-between border-t-2 border-black p-2">
      <WikiLink href={trendingItemBaseURL + title}>
        <h2>{title}</h2>
      </WikiLink>
      <div className=" flex text-gray-400 font-medium">
        <h3>{formatedViews}</h3>
        <BsEyeFill className="text-3xl ml-2" />
      </div>
    </div>
  )
}

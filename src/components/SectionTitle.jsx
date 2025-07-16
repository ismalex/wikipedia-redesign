import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'

export default function SectionTitle({
  title = 'Title Text',
  colorClassName = 'text-stone-400',
}) {
  
  return (
    <div className="flex items-center p-2 font-medium">
      <GoPrimitiveDot className={`text-2xl ${colorClassName}`} />
      <h4>{title}</h4>
    </div>
  )
}

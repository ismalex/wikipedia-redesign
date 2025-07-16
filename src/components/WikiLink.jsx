import React from 'react'

export default function WikiLink({ href, children, className = "" }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`link ${className}`}>
      {children}
    </a>
  )
}

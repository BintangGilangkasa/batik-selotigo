import React from 'react'

export default function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className={`size-[18px] shrink-0 ${diagonal ? '-rotate-45' : ''}`}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

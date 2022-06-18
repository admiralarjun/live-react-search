import React from 'react'

export default function Search({query}) {
  return (
    <div>
      <input onChange={query} type='search' placeholder='Search' className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-100"></input>
    </div>
  )
}

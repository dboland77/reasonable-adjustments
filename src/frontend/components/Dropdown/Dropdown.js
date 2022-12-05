import React from 'react'

export const Dropdown = ({disabilitylist}) => {
  console.log(disabilitylist)
  return (
    <select>
      {disabilitylist.map(d=><option value={d}>{d}</option>)}
      
      </select>
  )
}

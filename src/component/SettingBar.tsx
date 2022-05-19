import React from 'react'

export default function SettingBar() {
  return (
    <form className='border-b-2 pt-2 pb-2' >
      <label htmlFor="lineWidth" className='pr-6 text-xl'>Толщина линии</label>
      <input id="lineWidth" className='border-2 p-0.5'></input>
    </form>
  )
}

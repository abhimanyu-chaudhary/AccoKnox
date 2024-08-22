import React from 'react'

function Widget({widget, removeWidget}) {
  return (
    <div className='w-52 h-40 bg-amber-200 relative p-1 rounded-md'>
      <h1 className='font-semibold mb-10'>{widget.name}</h1>
      <h1>{widget.text}</h1>
      <button className='absolute -top-1 -right-2 px-2  bg-red-400 rounded-full' onClick={removeWidget}>X</button>
    </div>
  )
}

export default Widget

import React from 'react'

function Search({setSearchItems}) {
  return (
    <div >
      <input className='w-64 h-10 rounded-md border-[1px] border-slate-800' type="text" placeholder='Search Items' onChange={(e) => setSearchItems(e.target.value)} />
    </div>
  )
}

export default Search

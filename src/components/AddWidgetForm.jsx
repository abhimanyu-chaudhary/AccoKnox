import React, { useState } from 'react'

function AddWidgetForm({addWidget, cancel}) {
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addWidget({name, text});
    }
  return (
    <div className='w-[25rem] h-screen absolute top-0 right-0 bg-violet-600'>
      <form className='flex flex-col items-center' action="" onSubmit={handleSubmit}>
        <h1 className='font-bold text-2xl mt-10'>ADD NEW WIDGET</h1>
        <input className='w-[20rem] h-10 mt-5 rounded-md px-4' value={name} type="text" placeholder='Widget Name' onChange={(e) => setName(e.target.value)} />
        <input className='w-[20rem] h-10 mt-5 rounded-md px-4' value={text} type="text" placeholder='Widget Text' onChange={(e) => setText(e.target.value)}/>
        <div className='mt-5 '>
            <button className='px-2 py-2 bg-red-500 rounded-md mr-5' type='submit'>Add Widget</button>
            <button className='px-2 py-2 bg-red-500 rounded-md mr-5' type='button' onClick={cancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddWidgetForm

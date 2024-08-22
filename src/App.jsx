import React, { useState } from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard';

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <div className={`${theme ? "bg-white" : "bg-slate-900"} w-screen h-screen  ${theme ? "text-black" : "text-black"} `} >
      <Header setTheme={setTheme} theme={theme} />
      <Dashboard />
    </div>
  )
}

export default App;

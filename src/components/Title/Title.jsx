import React from 'react'

const Title = ({ children }) => {
  return (
    <div className='bg-zinc-400'>
      <h1 className="text-center text-6xl py-6 font-semibold text-zinc-700">{children}</h1>
    </div>
  )
}

export default Title

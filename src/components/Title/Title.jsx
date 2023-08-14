import React from 'react'

const Title = ({ children }) => {
  return (
    <div className='bg-zinc-300'>
      <h1 className="text-center text-6xl py-6 text-zinc-600">{children}</h1>
    </div>
  )
}

export default Title

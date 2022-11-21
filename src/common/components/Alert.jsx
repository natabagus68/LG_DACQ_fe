import React from 'react'

export const Alert = ({children}) => {
  return (
    <>
        <div className="rounded-lg bg-orange-100 px-10 py-8">
            {children}
        </div>
    </>
  )
}

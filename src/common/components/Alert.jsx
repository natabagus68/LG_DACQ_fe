import React from 'react'

export const Alert = ({children, action = false,  ...props}) => {
  const [active, setActive] = React.useState(false);
  React.useEffect(()=>{
    setActive(action)
  }, [action])
  return (
    <>
      {
        active && 
        <div className="fixed w-screen h-screen z-50 bg-[#000] bg-opacity-50 top-0 left-0 flex items-center justify-center">
          <div className='bg-white rounded-[12.92px] flex flex-col p-6'>
            {children}
          </div>
        </div>
      }
    </>
  )
}

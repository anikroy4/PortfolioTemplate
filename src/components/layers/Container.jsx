import React from 'react'

const Container = ({className, children}) => {
  return (
    <div className={`w-[1196px] mx-auto ${className}`}>
        {children}    
    </div>
  )
}

export default Container
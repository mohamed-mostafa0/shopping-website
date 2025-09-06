import React, { createContext, useEffect, useState } from 'react'


export const authContext = createContext()

export default function AuthContext({children}) {

    
    const [userToken, setuserToken] = useState(null)

    useEffect(()=>{
      if(localStorage.getItem('token') != null)
        setuserToken(localStorage.getItem('token'))
    }, [])

  return (
    <authContext.Provider value={{
        userToken,
        setuserToken
    }}>
        {children}
    </authContext.Provider>
  )
}

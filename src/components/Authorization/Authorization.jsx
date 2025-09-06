import React from 'react'
import Login from '../Login/Login'
import { Navigate } from 'react-router-dom'

export default function Authorization({children}) {

    if(!localStorage.getItem('token')) return <Navigate to='/login'/>

  return children
}

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import * as React from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectTypes {
  children: React.ReactElement
  redirectPath: string
}

export const ProtectedRoute = ({ children, redirectPath = '/login' }: ProtectTypes): React.ReactElement => {
  const isAllow = Boolean(localStorage.getItem('token'))
  if (!isAllow) {
    return <Navigate to={redirectPath} replace={true}/>
  } else return children
}

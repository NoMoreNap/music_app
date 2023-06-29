import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Container from './container'
import { LoginPage } from './pages/login'
import { ProtectedRoute } from './protect-route'

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
        <Route path="/" element=
        {
        <ProtectedRoute redirectPath='/login'>
            <Container />
        </ProtectedRoute>
        }>

    </Route>
    <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  )
}

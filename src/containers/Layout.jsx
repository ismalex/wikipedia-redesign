import React from 'react'
import { Outlet } from 'react-router-dom'
import { GlobalContextProvider } from '../context/GlobalContext'
import Header from '../components/Header'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <GlobalContextProvider>
      <div className="grid gap-4 md:grid-cols-[350px,_1fr] grid-cols-[100%]">
        <Sidebar />
        <main>
          <Header />
          <Outlet />
        </main>
      </div>
    </GlobalContextProvider>
  )
}

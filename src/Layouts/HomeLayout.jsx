import React from 'react'
import { Outlet } from 'react-router'
import { Header } from '../Components/Header/Header'

export const HomeLayout = () => {
  return (
    <div>
        <Header></Header>
        <main>
            <section className='left_nav'><h2>LeftNavbar</h2></section>
            <section className='main'><Outlet></Outlet></section>
            <section className='right_nav'><h2>RightNavbar</h2></section>
        </main>
    </div>
  )
}

import React from 'react'
import { Outlet } from 'react-router'
import { Header } from '../Components/Header/Header'
import { LatestNews } from '../Components/LatestNews/LatestNews'
import { NavBar } from '../Components/NavBar/NavBar'

export const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className='w-11/12 mx-auto my-3'>
          <LatestNews></LatestNews>
          <nav  className='w-11/12 mx-auto my-3'>
            <NavBar></NavBar>
          </nav>
        </section>

      </header>
      <main>
        <section className='left_nav'></section>
        <section className='main'><Outlet></Outlet></section>
        <section className='right_nav'></section>
      </main>
    </div>
  )
}

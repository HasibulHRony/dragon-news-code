import React from 'react'
import { Outlet } from 'react-router'
import { Header } from '../Components/Header/Header'
import { LatestNews } from '../Components/LatestNews/LatestNews'
import { NavBar } from '../Components/NavBar/NavBar'
import { LeftAside } from '../Components/homelayout/LeftAside'
import { RightAside } from '../Components/homelayout/RightAside'

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
      <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
        <aside className='col-span-3'>
          <LeftAside></LeftAside>
        </aside>
        <section className='main col-span-6'><Outlet></Outlet></section>
        <aside className='col-span-3'>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  )
}

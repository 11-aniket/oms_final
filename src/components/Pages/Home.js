import React from 'react'
import MyNavbar from './Navbar'
import Slider from './Slider'
import Footer from './Footer'
import GoalPage from './GoalPage'
// import home_admin from '../Admin/HomeAdmin'
// import Side_nav from '../Admin/SideNav'
// import Orphan_Details from '../Admin/Orphans/ChildInfo'
// import News_letter from '../Admin/Newsletter'
// import ContactUs from './ContactUs'

const Home = () => {
  return (
    <>
      <div>
        <MyNavbar/> 
        <Slider/>
        <GoalPage/>
        <section class="text-gray-700 body-font">
          <div class="container px-5 pt-14 pb-24 mx-auto">

        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div
              class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">

              <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
              <p class="leading-relaxed">Users</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div
              class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">

              <h2 class="title-font font-medium text-3xl text-gray-900">1.8K</h2>
              <p class="leading-relaxed">Subscribes</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div
              class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">

              <h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
              <p class="leading-relaxed">Downloads</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div
              class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">

              <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
              <p class="leading-relaxed">Missions</p>
            </div>
          </div>
        </div>
          </div>
        </section> 
        <div className='h-3'></div>
       <Footer/>
      </div>
    </>
  )
}

export default Home
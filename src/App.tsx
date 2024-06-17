import { useState } from 'react'
import NavBarButtons from "./components/NavBarButtons"
import NavBarProjects from "./components/NavbarProjects"
import Header from "./components/Header"
import MoreAboutMe from './components/MoreAbout'


function App() {


  return (
    <>
      <Header />

      <div className="flex flex-col items-center pb-10" >
        <h2 className="flex-center font-mono">Ongoing projects</h2>

        <NavBarButtons />

        <br></br>

        <MoreAboutMe />
      </div >


    </>
  )
}

export default App

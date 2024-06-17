import { useState } from 'react'
import NavBarButtons from "./components/NavBarButtons"
import NavBarProjects from "./components/NavbarProjects"
import Header from "./components/Header"
import MoreAboutMe from './components/MoreAbout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <MoreAboutMe />

      <NavBarButtons />

      <NavBarProjects />

    </>
  )
}

export default App

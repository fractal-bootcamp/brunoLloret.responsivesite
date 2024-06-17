import { useState } from 'react'
import './App.css';
import NavBarButtons from "./components/NavBarButtons"
import Header from "./components/Header"
import MoreAboutMe from './components/MoreAbout'
import Mobile from './components/MobileComponent';
import Desktop from './components/DesktopComponent';



function App() {


  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Landing page</title>
      </head>
      <body>
        <div className=" mx-auto bg-white rounded-xl overflow-hidden ">
          <div className="">
            <div className="">
              <div className="flex flex-col items-center pb-10" >
                <Header />
                <h2 className="flex-center font-mono">Ongoing projects</h2>

                <div className="">
                  <NavBarButtons />
                </div>
                <br></br>

                <MoreAboutMe />
                <br></br>
              </div >
            </div>
          </div>
        </div>
        <div>
        </div>
      </body>
      <div>
      </div>
    </>
  )
}

export default App
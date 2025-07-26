import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Github, { myProfileInfo } from './components/Github.jsx'

 const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {< App/>} >
      <Route path='' element = {<Home />} />
      <Route path='about' element = {<About />} />
      <Route path = 'contact' element = {<Contact/>} />
      <Route
      loader = {myProfileInfo}
      path = 'github' element = {<Github />} />
      </Route>
    )
 )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

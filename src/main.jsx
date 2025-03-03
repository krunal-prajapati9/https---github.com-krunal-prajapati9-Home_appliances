import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Components/Layout'
import Home from './Components/Home.jsx'
import LoginPage from './Components/LoginPage.jsx'
import RegistrationPage from './Components/RegistrationPage.jsx'
import ForgotPassword from './Components/ForgotPassword.jsx'
import ServiceProvider from './Components/Serviceprovider.jsx'
import Customer from './Components/Customer.jsx'
import Feedback from './Components/Feedback.jsx'
import Catagory from './Components/Catagory.jsx'
import Subcatagory from './Components/Subcatagory.jsx'
import Complain from './Components/Complain.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional (for JavaScript components)
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='serviceprovider' element={<ServiceProvider/>}/>
      <Route path='customer' element={<Customer/>}/>
      <Route path='catagory' element={<Catagory/>}/>
      <Route path='login'    element={<LoginPage/>}/>
      <Route path='registration' element={<RegistrationPage/>}/>
      <Route path='forgot-password'    element={<ForgotPassword/>}/>
      <Route path='subcatagory'    element={<Subcatagory/>}/>
      <Route path='complain'    element={<Complain/>}/>
      <Route path='feedback'    element={<Feedback/>}/>
      </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)

import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Register from './components/register/register'
import Home from './components/Home/Home'
import Login from "./components/Login/Login";
import ProductDetails from './components/ProductDetails/ProductDetails'
import AuthContext from './context/AuthContext'
import Authorization from './components/Authorization/Authorization'
import {QueryClientProvider , QueryClient} from '@tanstack/react-query'
import GetAllProducts from './components/getAllProducts/getAllProducts'



const router = createBrowserRouter([

  {path:"",element:<Layout/>,children:[
    {path:"",element:<Home/>},
    {path:"/register",element:<Register/>},
    {path:"/login", element:<Login/>},
    {path:"/productDetails/:id",element:<ProductDetails/> },
    {path:"/allProducts",element:<GetAllProducts/>}
  ]}
])

const client = new QueryClient()

export default function App() {

  return<>


<QueryClientProvider client={client}>

  <AuthContext>

  <RouterProvider router={router}/>
  
  </AuthContext>
  
</QueryClientProvider>
  </>

}

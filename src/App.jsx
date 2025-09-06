import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Login from "./components/signinAndSignupForm/signInAndSignupForm";
import ProductDetails from './components/ProductDetails/ProductDetails'
import AuthContext from './context/AuthContext'
import {QueryClientProvider , QueryClient} from '@tanstack/react-query'
import GetAllProducts from './components/getAllProducts/getAllProducts'
import NotFound from "./components/NotFound/NotFound";



const router = createBrowserRouter([

  {path:"",element:<Layout/>,children:[
    {path:"",element:<Home/>},
    {path:"/signup",element:<Login/>},
    {path:"/signin", element:<Login/>},
    {path:"/productDetails/:id",element:<ProductDetails/> },
    {path:"/allProducts",element:<GetAllProducts/>},
    {path:"*",element:<NotFound/>}
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

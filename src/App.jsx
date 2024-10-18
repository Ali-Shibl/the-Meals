import React from 'react'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import AreaDetails from './Pages/AreaDetails/AreaDetails'
import MealDetails from './Pages/MealDetails/MealDetails'
import {createHashRouter,RouterProvider} from 'react-router-dom'
import { QueryClient,QueryClientProvider} from 'react-query'
import Categories from './Pages/Categories/Categories'
import Area from './Pages/Area/Area'
import FindCategories from './Pages/FindCategories/FindCategories'

const App = () => {

let router=createHashRouter([
  {path:'',element:<Layout/>,children:[
    {index:true ,element:<Home/>},
    {path:'categories',element:<Categories/>},
    {path:'area',element:<Area/>},
    {path:'findcategory/:category',element:<FindCategories/>},
    {path:'details/:country',element:<AreaDetails/>},
    {path:'detailsmeal/:idMeal',element:<MealDetails/>}
    
  ]}
])


const queryClient = new QueryClient()

  return (
    <>

    <QueryClientProvider client={queryClient}>
      
     <RouterProvider router={router}/>    

    </QueryClientProvider>
    </>

  )
}

export default App
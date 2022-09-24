import react from "react"
import Home from "./Pages/Home.jsx"
import Head from "./Components/header/header"
import Err from "./Components/Err.jsx"
import Practise from "./Components/pract/practise"
import {BrowserRouter,Routes,Route} from "react-router-dom"
const app =()=>
{
    return (
      <BrowserRouter>
<Routes>
    <Route  path="/" element={<Home/> } />
    <Route  path="/hotel" element={<Head/>} />
    <Route  path="/practise" element={<Practise name=""/>}/>

    <Route path="*" element={<Err/>}/>
</Routes>

     </BrowserRouter>
    )
}

export default app
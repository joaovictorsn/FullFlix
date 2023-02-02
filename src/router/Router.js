import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/HomePage/Home'
import { Detail } from '../pages/MovieDetails/Detail'

export default function Router(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/FullFlix" element={<Home/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="*" element={<div>Page not found - ERROR NUMBER 404</div>}/>
        </Routes>
    </BrowserRouter>
    )
}
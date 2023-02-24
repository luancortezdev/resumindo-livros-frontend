import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Livros } from '../pages/Livros'
import Login from '../pages/Login'
import Formulario from '../pages/Formulario'
import { Home } from '../pages/Home'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route path='/' element={<Home />} />
          <Route path='/livros' element={<Livros />} />
          <Route path='/livros/novo' element={<Formulario />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

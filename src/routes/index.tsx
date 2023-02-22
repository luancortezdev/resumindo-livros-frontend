import { Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Livros } from '../pages/Livros'
import Login from '../pages/Login'
import Formulario from '../pages/Formulario'
import { Home } from '../pages/Home'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route path='/' element={<Home />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/livros' element={<Livros />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import PaginaPrincipal from '../pages/PaginaPrincipal'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/pagina-principal' element={<PaginaPrincipal />} />
    </Routes>
  )
}

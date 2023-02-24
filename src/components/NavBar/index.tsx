import { useTheme } from '@emotion/react'
import { AppBar, Button, Link } from '@mui/material'
import { Box } from '@mui/system'
import { Link as RouterLink, Outlet } from 'react-router-dom'

export default function NavBar() {
  const theme = useTheme()
  return (
    <Box component="header">
      <AppBar position='static' component="nav" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: "50px" }}>
        <Link component={RouterLink} to="/">
          <Button sx={{ color: 'white' }}>Home</Button>
        </Link>
        <Link component={RouterLink} to="/livros">
          <Button sx={{ color: 'white' }}>Livros</Button>
        </Link>
        <Link component={RouterLink} to="/livros/novo">
          <Button sx={{ color: 'white' }}>Novo Livro</Button>
        </Link>
      </AppBar>
      <Outlet />
    </Box >
  )
}

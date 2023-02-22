import { AppBar, Button, Link } from '@mui/material'
import { Box } from '@mui/system'
import { Link as RouterLink, Outlet } from 'react-router-dom'

export default function NavBar() {
  return (
    <Box component="header">
      <AppBar position='static' component="nav" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: "5%" }}>
        <Link component={RouterLink} to="/">
          <Button sx={{ color: 'white' }}>Home</Button>
        </Link>
        <Link component={RouterLink} to="/livros">
          <Button sx={{ color: 'white' }}>Livros</Button>
        </Link>
      </AppBar>
      <Outlet />
    </Box >
  )
}

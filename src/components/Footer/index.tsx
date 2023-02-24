import { Box, Link, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import { LinkedIn } from "@mui/icons-material";


export const Footer = () => {
  return (
    <Box component="footer" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography component="label" variant='overline' >
        Desenvolvido por Luan Cortez
      </Typography>
      <Box marginLeft={2}>
        <Link color="#000000" sx={{ textDecoration: 'none' }} component={RouterLink} target="_blank" to='https://github.com/luancortezdev'><GitHubIcon /></Link>
        <Link color="#000000" sx={{ textDecoration: 'none' }} component={RouterLink} target="_blank" to='https://www.linkedin.com/in/luancortezdev/'><LinkedIn /></Link>

      </Box>
    </Box >
  )
}

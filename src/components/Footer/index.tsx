import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant='h4' fontSize='20px' color={'#ffffff'}>
        Desenvolvido por <Link to='https://github.com/luancortezdev'>Luan Cortez</Link>
      </Typography>
    </Box >
  )
}

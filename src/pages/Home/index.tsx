import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Footer } from '../../components/Footer'
import { Main } from '../../components/Main'

export const Home = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography component="h1" variant="h4" sx={{ height: '5vh' }}>Resumindo Livros</Typography>
      <Box sx={{ height: "85vh" }}>
        <Main />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '5vh' }}>
        <Footer />
      </Box>
    </Box>
  )
}
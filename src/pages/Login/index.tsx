import { Avatar } from '@mui/material'
import { Box } from '@mui/system'
import InputLogin from './InputLogin'

export default function Login() {
  return (
    <Box
      sx={{
        backgroundColor: 'lightgray',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          backgroundColor: '#ffffff',
          width: '23.75rem',
          paddingLeft: '10px',
          paddingRight: '10px',
          textAlign: 'center',
          height: '60%',
          borderRadius: 15
        }}
      >
        <Box width="100%" height={100} mt={5} mb={5} display="flex" alignItems="center" justifyContent="center">
          <Avatar
            sx={{ height: 140, width: 140 }}
            src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"
          />
        </Box>
        <Box sx={{ margin: 'auto', paddingLeft: '10%', paddingRight: '10%' }}>
          <InputLogin />
        </Box>
      </Box>
    </Box>
  )
}

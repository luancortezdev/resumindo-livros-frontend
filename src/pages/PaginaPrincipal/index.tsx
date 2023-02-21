import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
export default function PaginaPrincipal() {
  return (
    <Box sx={{}}>
      <Container>
        <Box
          component='form'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 2
          }}>
          <TextField
            label="Título"
            variant="outlined"
            type='string'
            sx={{ width: 300, marginBottom: 2 }}
          />
          <TextField
            label="Autor"
            variant="outlined"
            type='string'
            sx={{ width: 300, marginBottom: 2 }}
          />
          <TextField
            label="Capítulo"
            variant="outlined"
            type='number'
            sx={{ width: 300, marginBottom: 2 }}
          />
          <TextField
            multiline
            maxRows={20}
            label="Resumo do capítulo"
            variant="outlined"
            type='string'
            sx={{ width: 500 }}
          />
        </Box>
      </Container>
    </Box>
  );
}
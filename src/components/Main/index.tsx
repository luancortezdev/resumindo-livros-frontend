import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import '../../App.css'

const styleButton = {
  background: '#538AF0',
  borderRadius: 3,
  color: 'white',
  height: 48,
  padding: '0 30px',
  fontWeight: 'bold'
};

export default function Main() {
  return (
    <Box marginLeft={20} marginRight={20} color={'#ffffff'}>
      <Typography
        variant='h2'
        fontSize='20px'
        textAlign='initial'
        paddingTop='5px'
        paddingBottom='5px'
      >
        Utilize o formulário abaixo para preencher os dados sobre o livro
      </Typography>
      <form>
        <Box display='flex' flexDirection='column'>
          <TextField
            variant='outlined'
            label='Título do livro'
            sx={{
              mb: 2,
              width: 400,
              backgroundColor: '#ffffff',
              borderRadius: 1
            }}
            type='string'
          />
          <TextField
            variant='outlined'
            label='Autor'
            sx={{
              mb: 2,
              width: 400,
              backgroundColor: '#ffffff',
              borderRadius: 1
            }}
            type='string'
          />
          <TextField
            variant='outlined'
            label='Capítulo'
            sx={{
              mb: 2,
              width: 100,
              backgroundColor: '#ffffff',
              borderRadius: 1
            }}
            type='number'
            defaultValue={1}
          />
          <TextField
            multiline
            maxRows={20}
            label='Resumo do capítulo'
            type='string'
            sx={{
              mb: 2,
              backgroundColor: '#ffffff',
              borderRadius: 1
            }}
          />
        </Box>
        <Button sx={styleButton} variant='contained'>Salvar</Button>
      </form>
    </Box>
  )
}

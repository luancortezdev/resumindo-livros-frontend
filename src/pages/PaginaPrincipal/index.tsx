import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function PaginaPrincipal() {
  const url = "http://localhost:9000/livros"

  const [livros, setLivros] = useState<any>([])

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setLivros(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(111, livros)
  return (
    <Box sx={{
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightgreen',
      height: '100vh'
    }}>
      <Box sx={{
        width: '100%',
        maxWidth: 500,
        backgroundColor: 'lightGray',
        paddingTop: 10,
        maxHeight: '100%'
      }}>
        <Typography variant='h3' fontSize={50} padding={1}>
          Memorizando Livros
        </Typography>
        {/* <Box sx={{ width: '80%', textAlign: 'initial', background: 'green', margin: 'auto', padding: 2 }}>
            <Typography variant='body2'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam modi nihil expedita quo officiis commodi dolorem blanditiis illo officia distinctio, corrupti adipisci in culpa dolore. Eligendi libero quo architecto excepturi.
            </Typography>
          </Box> */}
        {livros.map((livro: any, indice: any) => {
          return (
            <ul style={{ padding: 0 }} key={indice}>
              <li>Livro: {livro.titulo}</li>
              <li>Título: {livro.capitulo}</li>
              <li>Resumo do capítulo: {livro.resumo}</li>
            </ul>
          )
        })}
      </Box>
    </Box >
  );
}

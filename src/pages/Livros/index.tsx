import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Container } from '@mui/system'

export const Livros = () => {

  const livros = [
    {
      id: 1,
      titulo: "O Senhor dos Anéis",
      autor: "J. R. R. Tolkien"
    },
    {
      id: 2,
      titulo: "Cartas de um diabo a seu aprendiz",
      autor: "C. S. Lewis"
    }
  ]

  return (
    <Container maxWidth="lg" sx={{ mt: 1 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Livro
              </TableCell>
              <TableCell>
                Autor
              </TableCell>
              <TableCell>
                Detalhes
              </TableCell>
              <TableCell>
                Editar
              </TableCell>
              <TableCell>
                Excluir
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {livros.map((livro, id) => (
              <TableRow>
                <TableCell>
                  {livro.titulo}
                </TableCell>
                <TableCell>
                  {livro.autor}
                </TableCell>
                <TableCell>
                  <Button sx={{ paddingLeft: '0px' }}>Detalhes</Button>
                </TableCell>
                <TableCell>
                  {/* onClick={() => navigate(`/livros/${livro.id}`)} */}
                  <Button sx={{ paddingLeft: '0px' }} color="success">editar</Button>
                </TableCell>
                <TableCell>
                  {/* color="error" onClick={() => excluir(livro)} */}
                  <Button sx={{ paddingLeft: '0px' }} color="error">excluir</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

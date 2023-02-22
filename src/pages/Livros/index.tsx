import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Container } from '@mui/system'

export const Livros = () => {
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
                Editar
              </TableCell>
              <TableCell>
                Excluir
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                Livro
              </TableCell>
              <TableCell>
                Autor
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
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

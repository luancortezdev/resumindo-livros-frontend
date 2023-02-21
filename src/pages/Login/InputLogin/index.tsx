import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import { Alert, Divider } from '@mui/material';
import { Button, Input } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string,
  senha: string,
};


export default function InputLogin() {
  const navigate = useNavigate()
  const estiloLinkNovaConta = { textDecoration: 'none', color: '#ffffff' }
  const estiloLinkEsqueceuSenha = { textDecoration: 'none', color: '#1565C0' }

  console.warn('Os inputs precisam ser tratados antes de serem enviados')
  const
    { register,
      handleSubmit,
      formState: { errors }
    } = useForm<Inputs>({
      defaultValues: {
        email: '',
        senha: ''
      }
    });
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <Box sx={{ borderRadius: '50px' }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ margin: 1, display: 'flex', flexDirection: 'column', width: 300 }}>
        <FormControl variant="standard" sx={{ mb: 5 }}>
          <Input
            {...register("email", { required: "Campo obrigatório", minLength: { value: 4, message: "No mínimo 4 caracteres" } })}
            autoFocus
            placeholder='E-mail ID'
            type='email'
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <MailIcon />
              </InputAdornment>
            }
          />
          {errors.email?.message && (<Alert severity='info' sx={{ mt: 0.5, mb: 1 }}>{errors.email?.message}</Alert>)}
        </FormControl>
        <FormControl variant="standard" sx={{ mb: 4 }}>
          <Input
            {...register("senha", { required: "Campo obrigatório", minLength: { value: 8, message: "No minímo 8 caracteres" } })}
            placeholder='Senha'
            type='password'
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
          />
          {errors.senha?.message && (<Alert severity='info' variant='standard' sx={{ mt: 0.5, mb: 1 }}>{errors.senha?.message}</Alert>)}
        </FormControl>

        <Button
          onClick={() => (navigate('/pagina-principal'))}
          type='submit'
          variant='contained'
          sx={{
            padding: 1.5,
            mt: 2,
            mb: 3,
            letterSpacing: 3,
            borderRadius: 4,
            backgroundColor: "#275F8E"
          }}
        >
          LOGIN
        </Button>
        <Box display='flex' alignItems="center" justifyContent="center">
          <Link style={estiloLinkEsqueceuSenha}
            to='https://github.com/luancortezdev'
            target="_blank"
          >
            Esqueceu a senha?
          </Link>
        </Box>
      </form>
      <Divider sx={{ mb: '1.5rem', mt: '1.5rem' }} />
      <Box
        display='flex'
        alignItems="center"
        justifyContent="center"
        mt="30px"
        sx={{
          backgroundColor: "#1d7324",
          width: "50%",
          margin: "auto",
          pt: "0.75rem",
          pb: "0.75rem",
          borderRadius: 3
        }}
      >
        {/* <span>Não tem uma conta?</span> */}
        <Link
          style={estiloLinkNovaConta}
          to="https://github.com/luancortezdev"
          target="_blank"
        >
          Criar nova conta
        </Link>
      </Box>
    </Box >
  );
}

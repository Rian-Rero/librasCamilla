import { useForm } from 'react-hook-form';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { useTheme } from 'styled-components';

import { Box, Container, InputBox, Line, WelcomeBox } from './Styles';
import { Button, FormInput, Logo } from '../../components/common';

export default function Login() {
  const theme = useTheme();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm(); // Form Validation must be replaced

  const onSubmit = (formData) => {
    // eslint-disable-next-line no-console
    console.log(formData);
  };
  return (
    <Container>
      <Box>
        <Line>
          <Logo />
        </Line>
        <WelcomeBox>
          <Line
            style={{
              color: theme.colors.font.black,
              fontSize: '3rem',
            }}
          >
            Bem Vindo Novamente
          </Line>
          <Line>
            Não tem uma conta ainda?
            <a href="http://dev.luar.dcc.ufmg.br/">Contate-nos</a>
          </Line>
        </WelcomeBox>
        <InputBox>
          <FormInput
            name="email"
            placeholder="Digite seu email"
            errors={errors}
            register={register}
            icon={HiOutlineMail}
            backgroundcolor={theme.colors.backgroundGrey}
            borderRadius="1rem"
          />
          <FormInput
            name="password"
            placeholder="Digite sua senha"
            errors={errors}
            register={register}
            icon={HiOutlineLockClosed}
            backgroundcolor={theme.colors.backgroundGrey}
            borderRadius="1rem"
          />
        </InputBox>
        <Button
          backgroundColor={theme.colors.midGreen}
          hoverBackgroundColor={theme.colors.darkGreen}
          hoverColor={theme.colors.font.black}
          color={theme.colors.font.white}
          borderStyle="none"
          borderRadius="2rem"
          minHeight="4rem"
          minWidth="15rem"
          fontSize="2rem"
          boxShadow={`0px -1px 10px 1px ${theme.colors.grey}`}
          onClick={handleSubmit(onSubmit)}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}

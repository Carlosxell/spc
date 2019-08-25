import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().required('E-mail é um campo obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha é um campo obrigatório').min(6, 'A senha deve ter mínimo de 6 caracteres'),
});

export const formInclude = {};

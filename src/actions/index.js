// Coloque aqui suas actions

export const EMAIL_USER = 'EMAIL_USER';

const setEmail = (emailUser) => ({
  type: EMAIL_USER,
  payload: {
    email: emailUser,
  },
});

export default setEmail;

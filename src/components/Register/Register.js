import AuthForm from "../AuthForm/AuthForm";

const Register = () => {
  return (
    <AuthForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      quiestion="Уже зарегистрированы?"
      link="Войти"
      toLink="/signin"
      registr={true}
    />
  );
};

export default Register;

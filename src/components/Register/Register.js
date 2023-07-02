import AuthForm from "../AuthForm/AuthForm";

const Register = ({ handleSignUp }) => {
  return (
    <AuthForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      quiestion="Уже зарегистрированы?"
      link="Войти"
      toLink="/signin"
      registr={true}
      onSubmit={handleSignUp}
    />
  );
};

export default Register;

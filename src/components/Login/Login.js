import AuthForm from "../AuthForm/AuthForm";

const Login = () => {
  return (
    <AuthForm
      title="Рады видеть!"
      buttonText="Войти"
      quiestion="Ещё не зарегистрированы?"
      link="Регистрация"
      toLink="/signup"
      registr={false}
    />
  );
};

export default Login;

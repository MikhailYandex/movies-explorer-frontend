import AuthForm from "../AuthForm/AuthForm";

const Login = ({ handleSignIn }) => {
  return (
    <AuthForm
      title="Рады видеть!"
      buttonText="Войти"
      quiestion="Ещё не зарегистрированы?"
      link="Регистрация"
      toLink="/signup"
      registr={false}
      onSubmit={handleSignIn}
    />
  );
};

export default Login;

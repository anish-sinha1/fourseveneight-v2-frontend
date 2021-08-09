import LoginForm from "../../components/Login/Login";
import { Fragment } from "react";
import Navigation from "../../components/Layout/Navigation/Navigation";
const LoginPage = () => {
  return (
    <Fragment>
      <Navigation></Navigation>
      <LoginForm></LoginForm>
    </Fragment>
  );
};

export default LoginPage;

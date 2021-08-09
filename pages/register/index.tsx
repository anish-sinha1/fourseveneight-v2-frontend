import RegistrationForm from "../../components/Register/RegistrationForm";
import { Fragment } from "react";
import Navigation from "../../components/Layout/Navigation/Navigation";
const Register = () => {
  return (
    <Fragment>
      <Navigation></Navigation>
      <RegistrationForm></RegistrationForm>
    </Fragment>
  );
};

export default Register;

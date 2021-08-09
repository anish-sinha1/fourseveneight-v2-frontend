import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Login.module.css";
import { Row, Button, Form, Card, Alert } from "react-bootstrap";
import { formElementHandler } from "../util/handlerFactory";
import axios from "axios";
import AlertMessage from "../UI/Alert/AlertMessage";

const LoginForm: React.FC = (props) => {
  const errors: string[] = [];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(errors);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const usernameHandler = formElementHandler(setUsername);
  const passwordHandler = formElementHandler(setPassword);

  const alertMessageHandler = () => {
    setShowError(!showError);
  };

  const loginHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!username || !password) {
      errors.push("Please enter all fields! ");
    }
    setError(errors);

    if (error.length > 0) setShowError(true);

    const userObject: object = {
      username,
      password,
    };
    axios
      .post(`http://localhost:8000/api/v1/users/login`, userObject)
      .then(() => setShowSuccess(true))
      .catch((err) => {
        errors.push(err);
        setShowError(true);
      });
  };

  return (
    <Card className={`${classes["card"]} `}>
      {showError && (
        <div>
          <AlertMessage
            alertMessageType="warning"
            onClose={alertMessageHandler}
          >
            Errors: {error}
          </AlertMessage>
        </div>
      )}
      {showSuccess && (
        <div>
          <Alert variant="success">Successfully logged in!</Alert>
        </div>
      )}
      <div className={`${classes["form-heading"]}`}>
        <h3>Login</h3>
      </div>
      <Form>
        <Row>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              value={username}
              onChange={usernameHandler}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              value={password}
              onChange={passwordHandler}
            />
          </Form.Group>
        </Row>
      </Form>
      <Button
        variant="outline-dark"
        className={`${classes["button"]}`}
        onClick={loginHandler}
      >
        Submit
      </Button>
      <div className={`${classes["login-message"]}`}>
        <p>
          Forgot your password? <a href="/recover">Reset</a>
        </p>
      </div>
    </Card>
  );
};

export default LoginForm;

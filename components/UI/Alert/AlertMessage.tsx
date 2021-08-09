import { Alert } from "react-bootstrap";

const AlertMessage: React.FC<{
  alertMessageType: string;
  onClose: () => void;
}> = (props) => {
  return (
    <Alert variant={props.alertMessageType} dismissible onClose={props.onClose}>
      {props.children}
    </Alert>
  );
};

export default AlertMessage;

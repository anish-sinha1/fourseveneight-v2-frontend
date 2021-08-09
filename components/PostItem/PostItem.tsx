import { Card, Row, Col, Container, Image, Button } from "react-bootstrap";
import IPostItem from "../templates/PostItemTemplate";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./PostItem.module.css";
const PostItem: React.FC<{ post: IPostItem }> = (props) => {
  const date: string = new Date(props.post.publicationDate).toLocaleString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  console.log(typeof date);
  return (
    <Container>
      <Row>
        <Col className={classes["col"]}>
          <Card className={classes["post-text"]}>
            <Row>
              <p>{props.post.authorNames}</p>
            </Row>
            <Row>
              <h3 className={classes["post-title"]}>{props.post.title}</h3>
            </Row>
            <Row>{props.post.summary}</Row>
            <Row className={classes["post-details"]}>
              <Col>{date}</Col>
              <Col>{props.post.length}</Col>
              <Col>{props.post.difficulty}</Col>
            </Row>
          </Card>
        </Col>
        <Col className={classes["col"]}>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-BDNN3xYgUIHcNDS3qmWz88pRDge5W2Q4rQ&usqp=CAU"
            alt="React.js"
            fluid
          ></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default PostItem;

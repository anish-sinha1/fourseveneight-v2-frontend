import { Fragment } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import IPostItem from "../templates/PostItemTemplate";
import "bootstrap/dist/css/bootstrap.min.css";
const PostItem: React.FC<{ post: IPostItem }> = (props) => {
  return (
    <Container>
      <Card>
        <Row>
          <Col xs={6}>
            <h3>{props.post.title}</h3>
          </Col>
          <Col>{props.post.authors[0]}</Col>
        </Row>
        <Row>{props.post.summary}</Row>
        <Row>
          <Col>{props.post.length}</Col>
          <Col>{props.post.difficulty || "intermediate"}</Col>
          <Col>{props.post.tags[0]}</Col>
        </Row>
      </Card>
    </Container>
  );
};

export default PostItem;

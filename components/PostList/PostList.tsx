import { Container, Row, Col } from "react-bootstrap";
import { Fragment } from "react";
import PostItem from "../PostItem/PostItem";
import classes from "./PostList.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import IPostItem from "../templates/PostItemTemplate";
const PostList: React.FC<{ postArray: IPostItem[] }> = (props) => {
  return (
    <Fragment>
      <Container className={classes["container"]}>
        {props.postArray.map((post) => {
          return (
            <Fragment key={post._id}>
              <PostItem post={post}></PostItem>
              <hr></hr>
            </Fragment>
          );
        })}
      </Container>
    </Fragment>
  );
};

export default PostList;

import { Card, Row, Col } from "react-bootstrap";
import { Fragment } from "react";
import PostItem from "../PostItem/PostItem";
import "bootstrap/dist/css/bootstrap.min.css";
import IPostItem from "../templates/PostItemTemplate";
const PostList: React.FC<{ postArray: IPostItem[] }> = (props) => {
  return (
    <Fragment>
      <Card>
        {props.postArray.map((post) => {
          return <PostItem key={post._id} post={post}></PostItem>;
        })}
      </Card>
    </Fragment>
  );
};

export default PostList;

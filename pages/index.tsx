import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Layout/Navigation/Navigation";
import styles from "../styles/Home.module.css";
import axios from "axios";
import PostList from "../components/PostList/PostList";
import IPostItem from "../components/templates/PostItemTemplate";
import mongoose, { ConnectionStates } from "mongoose";

const Home: React.FC<{ postArray: IPostItem[] }> = (props) => {
  return (
    <div>
      <Navigation />
      <PostList postArray={props.postArray}></PostList>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  try {
    const apiCallResponse = await axios.get(
      `http://localhost:8000/api/v1/posts`
    );
    const postArray = JSON.parse(`${apiCallResponse.data.data.doc}`);
    return { props: { postArray } };
  } catch (err) {
    //Render some sort of error idk
  }
}

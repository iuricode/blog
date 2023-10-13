import { getAllPosts, PostMeta } from "../api";
import Articles from "../components/articles";
import React from "react";
import Head from "../infra/head";
import Footer from "../components/footer";
import Menu from "../components/menu";
import Profile from "../components/profile";
import Publi from "../components/publi";

const Home = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <React.Fragment>
      <Head title="Blog // Iuri Silva" />
      <div className="containerFlexBox">
        <Menu />
        <Profile />
        <Articles posts={posts} />
        <Publi />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;

export const getStaticProps = async () => {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
};

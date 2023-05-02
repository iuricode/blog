import { getAllPosts, PostMeta } from "../api";
import Articles from "../components/articles";
import React from "react";
import Head from "../infra/head";
import Footer from "../components/footer";
import Menu from "../components/menu";

const Home = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <React.Fragment>
      <Head title="Blog // Iuri Silva" />
      <div className="containerFlexBox">
        <Menu />
        <Articles posts={posts} />
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

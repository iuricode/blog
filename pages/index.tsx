import { getAllPosts, PostMeta } from "../src/api";
import Articles from "../src/components/articles";
import React from "react";
import Head from "../src/infra/head";
import Footer from "../src/components/footer";
import Menu from "../src/components/menu";

const Home = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <React.Fragment>
      <Head title="Blog // Iuri Silva - Início" />
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

import { getAllPosts, PostMeta } from '../src/api';
import Articles from '../src/components/articles';
import React from 'react';

const Home = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <React.Fragment>
      <h1>Artigos</h1>
      <Articles posts={posts} />
    </React.Fragment>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map(post => post.meta);

  return { props: { posts } };
}

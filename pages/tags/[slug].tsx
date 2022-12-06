import type { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { getAllPosts, PostMeta } from '../../src/api';
import Articles from '../../src/components/articles';
import React from 'react';

const TagPage = ({ slug, posts }: { slug: string; posts: PostMeta[] }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Tag: {slug}</title>
      </Head>
      <h1>Tag: {slug}</h1>
      <Articles posts={posts} />
    </React.Fragment>
  );
};

export default TagPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const posts = getAllPosts().filter(post => post.meta.tags.includes(slug));

  return {
    props: {
      slug,
      posts: posts.map(post => post.meta)
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const tags = new Set(posts.map(post => post.meta.tags).flat());
  const paths = Array.from(tags).map(tag => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false
  };
};

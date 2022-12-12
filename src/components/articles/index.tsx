import Link from "next/link";
import type { PostMeta } from "../../api";
import styles from "./styles.module.css";

const Articles = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <ul className={`containerMDX ${styles.list}`}>
      {posts.map((post, key) => (
        <Link href={`/posts/${post.slug}`} key={key}>
          <li key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <span>
              {post.tags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Articles;

import React, { useEffect, useState } from "react";
import styles from "../styles/Results.module.css";

export default function Results({ subreddit }) {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const res = await fetch(
      `https://www.reddit.com/r/${subreddit}/hot/.json?limit=10`
    );
    const json = await res.json();
    setPosts(json.data.children.map((c) => c.data));
  }, [subreddit, setPosts]);

  return (
    <>
      <h2 className={styles.heading}>Posts from r/{subreddit}</h2>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li className={styles.item} key={post.id}>
            <a className={styles.link} href={post.url} target="blank">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

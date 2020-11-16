import React, { useState } from "react";
import Results from "../components/Results";
import styles from "../styles/Home.module.css";

function Home() {
  const [inputValue, setValue] = useState("reactjs");
  const [subreddit, setSubreddit] = useState(inputValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubreddit(inputValue);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Fast Reddit</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        r/
        <input value={inputValue} onChange={(e) => setValue(e.target.value)} />
        <input type="submit" value="Search" />
      </form>
      <Results subreddit={subreddit} />
    </section>
  );
}

export default Home;

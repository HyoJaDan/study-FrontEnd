import React, { useEffect, useState } from "react";
import Tech from "../components/Tech";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState("true");
  const [techs, setTechs] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch("https://inshorts-api.herokuapp.com/news?category=startup")
    ).json();
    console.log(json);
    setTechs(json.data);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <h1>Loading... </h1>
        </div>
      ) : (
        <div className={styles.techs}>
          {techs.map((tech) => (
            <Tech
              key={tech.title}
              title={tech.title}
              time={tech.time}
              author={tech.author}
              image={tech.imageUrl}
              content={tech.content}
              read={tech.readMoreUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

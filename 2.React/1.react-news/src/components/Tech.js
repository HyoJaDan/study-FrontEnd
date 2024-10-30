import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Tech.module.css";

function Tech({ title, time, author, image, content, read }) {
  return (
    <div className={styles.Tech}>
      <h2 className={styles.header}>{title}</h2>
      <div className={styles.news__author}>
        {author}
        <br />
        {time}
      </div>
      <img src={image} alt="pic" className={styles.Tech__img} />
      <div className={styles.content}>{content}</div>
      <a className={styles.href} href={read}>
        for more information
      </a>
    </div>
  );
}

Tech.propTypes = {
  id: PropTypes.number.isRequired /* prop설정 */,
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Tech;

/* eslint-disable react/prop-types */
import css from "../components/Profile.module.css";

export const Profile = ({
  name,
  tag,
  location,
  image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats,
}) => {
  return (
    <div className={css.profile}>
      <div className={css.info_container}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.lists}>
        <li>
          <span>Followers</span>
          <span className={css.numbers}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={css.numbers}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={css.numbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

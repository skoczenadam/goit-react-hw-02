import css from "../components/FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.item_container}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      {isOnline ? (
        <p className={css.color_online + " " + css.status}>Online</p>
      ) : (
        <p className={css.color_offline + " " + css.status}>Offline</p>
      )}
    </div>
  );
};

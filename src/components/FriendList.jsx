import { FriendListItem } from "./FriendListItem";
import css from "../components/FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.lists_container}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          ></FriendListItem>
        </li>
      ))}
    </ul>
  );
};

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  List,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItem,
  ListItemButton,
} from "@mui/material";

import type { user } from "../types";

const UsersList = () => {
  const usersList = useSelector(
    (state: { usersList: user[] }) => state.usersList
  );

  return (
    <List component="nav">
      {usersList.map((user) => (
        <Link key={user.id} to={`/users/${user.login}`}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar src={user.avatar_url} alt={`Avatar ${user.login}`} />
              </ListItemAvatar>
              <ListItemText primary={user.login} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
export default UsersList;

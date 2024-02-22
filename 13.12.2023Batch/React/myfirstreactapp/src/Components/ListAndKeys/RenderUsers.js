import React, { useEffect, useState } from "react";
import { StyledUsers } from "./styled";

export const RenderUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((failure) => console.log(failure));
  }, []);
  console.log(users);
  return (
    <div>
      {users?.map((user) => {
        return (
          <StyledUsers key={user.id}>
            <div>{user.username}</div>
            <div>{user.id}</div>
          </StyledUsers>
        );
      })}
    </div>
  );
};

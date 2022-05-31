import React from "react";

export default function UserCard(props) {
  const { users } = props;

  return (
    <>
      {users.map((user) => (
        <div className="card" key={user.login.uuid}>
          <img src={user.picture.large} alt="pic" />
          <p>
            {user.name.title}.{user.name.first} {user.name.last}
          </p>
        </div>
      ))}
    </>
  );
}

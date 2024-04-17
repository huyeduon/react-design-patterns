import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserLoader = ({ userId, children }) => {
  // init state of user is null while we loading data
  const [user, setUser] = useState(null);

  // useEffect with [] dependency to make sure it only load 1 time when it render
  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      const currentUser = response.data;
      setUser(currentUser);
    })();
  }, [userId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

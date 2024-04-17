import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DataSource = ({
  getDataFunc = () => {},
  resourceName,
  children,
}) => {
  // init state of user is null while we loading data
  const [state, setState] = useState(null);

  // useEffect with [] dependency to make sure it only load 1 time when it render
  useEffect(() => {
    (async () => {
      const data = await getDataFunc();
      setState(data);
    })();
  }, [getDataFunc]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
        return child;
      })}
    </>
  );
};

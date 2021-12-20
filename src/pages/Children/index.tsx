import React from 'react';
import { Outlet } from 'react-router-dom';
const Children = () => {
  return (
    <div>
      Children
      <Outlet />
    </div>
  );
};
export default Children;

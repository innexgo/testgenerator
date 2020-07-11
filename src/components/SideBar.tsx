import React from "react";
import {slide as Menu} from "react-burger-menu";

export default (props:any) => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/testreport">View All Tests</a>
    </Menu>
  );
};


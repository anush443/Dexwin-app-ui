import React from "react";
import { useHistory } from "react-router-dom";
const Logo = (props) => {
  const history = useHistory();
  return (
    <img
      onClick={() => history.push("/explore")}
      src="/images/logo.png"
      alt="Logo"
      style={{ cursor: "pointer" }}
      {...props}
    />
  );
};

export default Logo;

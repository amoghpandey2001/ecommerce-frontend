import React from "react";
import Menu from "./Menu";
import "../styles.css";

//{... all these are props that are passed when Layout functional component will use}
const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className="jumbotron">
        <h2>{title}</h2>
        <p className="lead">{description} </p>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};
export default Layout;

import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My title",
  description = "My description",
  className = " p-4",
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className="container-fluid">
        <div className="jumbotron BaseContainer text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="footer FooterContainer mt-auto py-3">
        <div className="container-fluid text-center py-3">
          <h4>If you got any questions, Contact me</h4>
          <a href="/">
            <i class="fa fa-instagram Icons fa-2x"></i>
          </a>
          <a href="/">
            <i class="fa fa-github Icons fa-2x"></i>
          </a>
          <a href="/">
            <i class="fa fa-linkedin Icons fa-2x"></i>
          </a>
          <div className="container">
            <span>An Amazing Django React project</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Base;

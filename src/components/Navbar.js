import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem",
    background: "#d33f49",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "1.5rem",
    margin: "10px",
  },
  heading: {
    textDecoration: "none",
    color: "black",
    fontSize: "2.5rem",
    fontWeight: "600",
    fontFamily: "Montserrat",
    letterSpacing: "3px",
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <Link className={classes.heading} to="/">
          TEAM COLITICS
        </Link>
      </div>
      <div className={classes.flex}>
        <Link className={classes.link} to="/">
          HOME
        </Link>
        <Link className={classes.link} to="/">
          MEMBERS
        </Link>
        <Link className={classes.link} to="/">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

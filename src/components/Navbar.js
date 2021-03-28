import { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    alignItems: "center",
    padding: "0.75em",
    color: "black",
    [theme.breakpoints.up("xs")]: {
      fontSize: ".7em",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: ".8em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1em",
    },
    boxShadow: "0px 10px 20px 5px rgba(0,0,0,0.2)",
  },
  heading: {
    textDecoration: "none",
    fontSize: "3em",
    fontWeight: "600",
    letterSpacing: "0.6px",
  },
  colitics: {
    color: "#414141",
    color: theme.palette.secondary.main,
  },
  team: {
    color: "#414141",
  },
  icon: {
    display: "none",
  },
  links: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#E9E9E9",
    fontSize: "2em",
    position: "absolute",
    top: "0",
    height: "100vh",
    left: "0",
    width: "100%",
    "& > *": {
      display: "block",
      fontSize: "2.5em",
    },
    zIndex: "999",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "1.5em",
    margin: "0 2em 0 0",
    fontFamily: "Montserrat",
    cursor: "pointer",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [isActive, setActive] = useState(false);
  return (
    <Grid container className={classes.root}>
      <Grid item sm={10} md={7}>
        <a className={classes.heading} href="/">
          <span className={classes.team}>TEAM</span> <span className={classes.colitics}>COLITICS</span>
        </a>
      </Grid>
      <Grid item className={isActive ? classes.menu : classes.links}>
        <a className={classes.link} href="/">
          HOME
        </a>
        <a className={classes.link} href="/#members">
          MEMBERS
        </a>
        <a className={classes.link} href="/#contact">
          CONTACT
        </a>
      </Grid>
      {isActive ? (
        <CgClose
          className={classes.icon}
          onClick={() => {
            setActive(!isActive);
          }}
        ></CgClose>
      ) : (
        <CgMenuRightAlt
          className={classes.icon}
          onClick={() => {
            setActive(!isActive);
          }}
        ></CgMenuRightAlt>
      )}
    </Grid>
  );
};

export default Navbar;

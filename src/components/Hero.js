import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.5rem",
    margin: "50px 0",
  },
  text: {
    maxWidth: "30%",
    margin: "1rem",
    fontSize: "1.25rem",
  },
  header: {
    fontSize: theme.typography.h1.fontSize,
    fontFamily: "Montserrat",
    fontWeight: "500",
  },
}));
const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <img src="/images/colitics_pic.jpg" alt="" />
      </div>
      <div className={classes.text}>
        <Typography variant="h1" className={classes.header}>
          Colitics
        </Typography>
        <p>
          Team Colitics was originally founded on June 4, 2020. 2 South Tyroleans and 1 Tyrolean had the idea to create a team to participate in a
          tournament. The name is composed of Critical Politics, which is among other things the reason why each team member has chosen the name of a
          politician. Meanwhile the whole team consists of 8 players which are listed below.
        </p>
      </div>
    </div>
  );
};

export default Hero;

import { useParams } from "react-router-dom";
import { makeStyles, Grid, IconButton, Typography, Card } from "@material-ui/core";
import { AgeFromDate } from "age-calculator";
import { members } from "../memberlist";
import { FaSteam } from "react-icons/fa";
import Navbar from "./Navbar";
import { useEffect } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  img: {
    width: "90%",
  },
  icon: {
    height: "1em",
  },
  grid: {
    position: "relative",
    width: "1200px",
    alignItems: "center",
    borderRadius: "0 1rem 1rem 0",
    padding: "2em",
    fontSize: "1.25em",
    background: theme.palette.primary.light,
    "& > * > *": {
      marginBottom: "1rem",
    },
    [theme.breakpoints.down("md")]: {
      width: "900px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      justifyContent: "center",
    },
    ["@media (min-width: 2500px)"]: {
      width: "2000px",
      fontSize: "1.5em",
    },
    ["@media (min-width: 3500px)"]: {
      width: "3000px",
    },
  },
  heading: {
    color: "#D5D5D5",
    textTransform: "uppercase",
    fontStyle: "italic",
    marginLeft: "1rem",
    fontSize: "clamp(2.5em,5vw,4em)",
    // [theme.breakpoints.down("xs")]: {
    //   fontSize: "3em",
    // },
  },
  gridContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: "1",
    background: theme.palette.primary.main,
    width: "100%",
    padding: "4em 0",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8em",
    },
  },
  colitics: {
    position: "absolute",
    top: "50%",
    right: "0",
    color: "transparent",
    "-webkit-text-stroke": "1px " + theme.palette.secondary.main,
    transform: "rotate(90deg) translateX(50%)",
  },
}));
const Profile = () => {
  const classes = useStyles();
  let { name } = useParams();
  let currentMember = {};
  members.map((member) => {
    if (member.short_name == name) {
      currentMember = member;
    }
  });
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const getYears = (date) => {
    return new AgeFromDate(new Date(date)).age;
  };

  return (
    <div className={classes.root}>
      <Navbar></Navbar>
      <div className={classes.gridContainer}>
        <Typography className={classes.heading}>{currentMember.name}</Typography>
        <Grid component={Card} variant="outlined" container className={classes.grid}>
          <Grid item xs={12} sm={8} md={6}>
            <img className={classes.img} src={`/images/${currentMember.img}`} alt="" />
          </Grid>
          <Grid item xs={12} sm={8} md={6} style={{ borderLeft: "3px solid #A8A8A8", paddingLeft: "1rem" }}>
            <Grid xs={12} item>
              <strong>AGE</strong>
              <p>{getYears(currentMember.birthdate)}</p>
            </Grid>
            <Grid xs={12} item>
              <strong>NATIONALITY</strong>
              <div>
                {currentMember.nationality === "it" ? (
                  <img className={classes.icon} src="/images/it.jpg" alt="" />
                ) : (
                  <img className={classes.icon} src="/images/at.png" alt="" />
                )}
              </div>
            </Grid>
            <Grid xs={12} item>
              <strong>TEAM</strong>
              <p>Colitics</p>
            </Grid>
            <Grid xs={12} item>
              <strong>GAME</strong>
              <p>Counter-Strike: Global Offensive</p>
            </Grid>
            <Grid xs={12} item>
              <strong>DESCRIPTION</strong>
              <p>{currentMember.description}</p>
            </Grid>
            <Grid xs={12} item>
              <p>
                <strong>STEAM</strong>
              </p>
              <IconButton href={currentMember.steam} target="_blank" style={{ padding: "0" }}>
                <FaSteam style={{ fontSize: "1.5em" }}></FaSteam>
              </IconButton>
            </Grid>
          </Grid>
          {/* <Typography variant="h1" className={classes.colitics}>
            COLITICS
          </Typography> */}
        </Grid>
      </div>
    </div>
  );
};

export default Profile;

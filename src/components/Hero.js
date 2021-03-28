import { makeStyles, Typography, Grid, Button } from "@material-ui/core";
import Navbar from "./Navbar";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  container: {
    background: "#212020",
    borderRadius: "0 0 6rem 0",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      fontSize: "0.4em",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "0.8em",
      justifyContent: "center",
    },
  },
  text: {
    textTransform: "uppercase",
    color: "rgb(192, 192, 192)",
  },
  img: {
    width: "100%",
  },
  title: {
    marginBottom: "1rem",
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontStyle: "italic",
    letterSpacing: "1px",

    [theme.breakpoints.down("xs")]: {
      fontSize: "4em",
    },
  },
  textContainer: {
    padding: "2em",
    [theme.breakpoints.down("sm")]: {
      margin: "2em 0",
    },
  },
  button: {
    fontWeight: "500",
    marginTop: "0.5em",
    fontSize: "1.25em",
  },
  scrollIcon: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar></Navbar>
      <Grid container className={classes.container} alignItems="center">
        <Grid xs={12} sm={10} lg={7} item>
          <img src="/images/colitics_img.png" alt="" className={classes.img} />
        </Grid>
        <Grid item xs={12} sm={10} lg={5} className={classes.textContainer}>
          <Typography variant="h1" className={classes.title}>
            COLITICS
          </Typography>
          <Typography className={classes.text}>
            TEAM COLITICS WAS ORIGINALLY FOUNDED ON JUNE 4, 2020. 2 SOUTH TYROLEANS AND 1 TYROLEAN HAD THE IDEA TO CREATE A TEAM TO PARTICIPATE IN A
            TOURNAMENT IN THE FUTURE. THE NAME IS COMPOSED OF CRITICAL POLITICS, WHICH IS AMONG OTHER THINGS THE REASON WHY EACH TEAM MEMBER HAS
            CHOSEN THE NAME OF A POLITICIAN. CURRENTLY THE TEAM CONSISTS OF 8 PLAYERS WHICH ARE LISTED BELOW.
          </Typography>
          <Button variant="contained" color="secondary" href="#members" className={classes.button}>
            See our team
          </Button>
        </Grid>
      </Grid>
      <Grid container className={classes.scrollIcon}>
        <Grid item md={7}></Grid>
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Hero;

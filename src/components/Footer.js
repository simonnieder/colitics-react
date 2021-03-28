import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("xs")]: {
      fontSize: ".6em",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.8em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1em",
    },
    textAlign: "left",
    padding: "1.5em",
  },
  text: {
    fontFamily: "Montserrat",
    fontSize: "2.5em",
    letterSpacing: "1px",
    fontWeight: "600",
    textTransform: "uppercase",
    color: "#535353",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.text}>
        &copy;2021 Team Colitics
      </Typography>
    </div>
  );
};

export default Footer;

import { Card, makeStyles, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    cursor: "pointer",
    textDecoration: "none",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    background: "#F1F1F1",
    borderRadius: "2em",
    padding: "2em",
    [theme.breakpoints.up("xs")]: {
      width: "275px",
      height: "275px",
    },
    [theme.breakpoints.up("md")]: {
      width: "350px",
      height: "350px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "500px",
      height: "500px",
    },
    ["@media (min-width: 2500px)"]: {
      width: "700px",
      height: "700px",
    },
    ["@media (min-width: 3500px)"]: {
      width: "900px",
      height: "900px",
    },
  },
  img: {
    height: "70%",
    borderRadius: "50%",
  },
  text: { textTransform: "uppercase" },
  title: {
    textAlign: "center",
    fontSize: "2em",
    fontWeight: "500",
    textDecoration: "underline",
  },
  description: {
    ["@media (min-width: 2500px)"]: {
      fontSize: "1.25em",
    },
    fontSize: "1em",
  },
}));
const Member = ({ member }) => {
  const img = `/images/${member.icon}`;
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card className={classes.root} component={Link} to={`/members/${member.short_name}/`} variant="outlined">
      <img className={classes.img} src={img} alt={member.name} />
      <div className={classes.text}>
        <Typography variant="body1" className={classes.description}>
          {member.description}
        </Typography>
        <Typography variant="h1" className={classes.title}>
          {member.name}
        </Typography>
      </div>
    </Card>
  );
};

export default Member;

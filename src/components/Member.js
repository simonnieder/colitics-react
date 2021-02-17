import { Card, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    margin: "1.5rem",
    width: "300px",
    height: "300px",
    borderRadius: "1rem",
  },
  img: {
    height: "70%",
    borderRadius: "50%",
  },
  text: {
    fontSize: "1.25rem",
  },
}));
const Member = ({ member }) => {
  const img = `/images/${member.icon}`;
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <img className={classes.img} src={img} alt={member.name} />
      <span className={classes.text}>{member.name}</span>
    </Card>
  );
};

export default Member;

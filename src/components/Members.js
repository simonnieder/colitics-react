import Member from "./Member";
import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "auto",
    textAlign: "center",
  },
  memberContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    flexDirection: "row",
    flexWrap: "wrap",
  },
}));
const Members = ({ members }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">TEAM</Typography>
      <Typography variant="p" style={{ fontSize: "1.25rem" }}>
        Colitics consists of the following pro players:
      </Typography>
      <div className={classes.memberContainer}>
        {members.map((member, index) => (
          <Member key={index} member={member}></Member>
        ))}
      </div>
    </div>
  );
};

export default Members;

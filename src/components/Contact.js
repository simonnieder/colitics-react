import { Button, TextField, Paper, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import validator from "email-validator";
import emailjs from "emailjs-com";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    overflow: "hidden",
    "& > *": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: ".8em",
      height: "500px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.8em",
      height: "700px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: ".8em",
      height: "fit-content",
    },
    ["@media (min-width: 2500px)"]: {
      fontSize: "1.25em",
    },
  },
  password: {
    marginBottom: "1rem",
  },
  contact: {
    width: "100%",
    position: "relative",
    "& > *": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
  },
  svg: {
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      width: "700px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "500px",
    },
    ["@media only screen and (max-width: 400px)"]: {
      width: "500px",
    },
  },
  textfield: {
    color: theme.palette.primary.light,
    fontSize: "1.25em",
  },
  img: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginBottom: "-5rem",
    },
  },
  imgContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({ error: "" });

  const submitForm = (e) => {
    e.preventDefault();
    setError({ error: "" });
    if (!validator.validate(email)) {
      setError({ error: "Email address not valid!" });
      return;
    }
    const sendEmail = async () => {
      emailjs.sendForm("service_r91j2oq", "colitics", e.target, "user_Svyv9OhJkOb4UjDfKN7s9").then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    };
    sendEmail();
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <Grid container className={classes.container} id="contact">
      <Grid item sm={6} md={5} lg={6} className={classes.imgContainer}>
        <img src="/images/jan_img.png" alt="" className={classes.img} />
      </Grid>
      <Grid item xs={12} md={7} lg={6} className={classes.contact}>
        <svg className={classes.svg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#212121"
            d="M46.2,-71.6C60.6,-62.6,73.5,-51,81.7,-36.4C89.8,-21.7,93.2,-3.9,89.8,12.3C86.5,28.4,76.5,43,65,56.5C53.6,70,40.7,82.4,25.1,88.3C9.4,94.2,-8.9,93.6,-25.4,88.1C-41.8,82.5,-56.4,72,-67.9,58.8C-79.5,45.6,-88.1,29.7,-90.8,12.9C-93.4,-3.9,-90,-21.8,-82,-36.7C-74,-51.6,-61.3,-63.6,-46.8,-72.5C-32.4,-81.4,-16.2,-87.2,-0.1,-87C15.9,-86.8,31.8,-80.5,46.2,-71.6Z"
            transform="translate(100 100)"
          />
        </svg>
        <div>
          <Typography variant="body1" style={{ color: "#e8e8e8", textTransform: "uppercase", fontSize: "1.25em" }}>
            want to join our team?
          </Typography>
          <Typography variant="h3" style={{ color: "white", fontWeight: "600", fontFamily: "Montserrat", fontSize: "3.5em", whiteSpace: "nowrap" }}>
            Contact us
          </Typography>
          <form className={classes.form} onSubmit={submitForm}>
            <TextField
              color="secondary"
              fullWidth
              required
              label="Name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              inputProps={{ className: classes.textfield }}
              InputLabelProps={{ className: classes.textfield }}
            ></TextField>
            <TextField
              fullWidth
              required
              color="secondary"
              label="Email"
              type="email"
              name="email"
              value={email}
              error={Boolean(error?.error)}
              helperText={error.error}
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{ className: classes.textfield }}
              InputLabelProps={{ className: classes.textfield }}
            ></TextField>
            <TextField
              fullWidth
              required
              color="secondary"
              label="Message"
              type="text"
              name="message"
              multiline
              rows={1}
              rowsMax={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              inputProps={{ className: classes.textfield }}
              InputLabelProps={{ className: classes.textfield }}
            ></TextField>
            <Button color="secondary" type="submit" variant="contained" style={{ marginTop: "1rem", fontSize: "1.25em" }}>
              submit
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;

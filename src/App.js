import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Members from "./components/Members";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { teamMembers } from "./memberlist";
import { useState } from "react";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1f1f1f",
      light: "#292929",
      dark: "#141414",
    },
    secondary: {
      main: "#9f9fed",
      dark: "#6565E2",
      light: "#BBBBF2",
    },
    action: {
      hoverOpacity: "0.1",
    },
  },
  typography: {
    h1: {
      fontFamily: "Montserrat",
      fontWeight: "600",
      fontSize: "3rem",
    },
  },
});

function App() {
  const [members, setMembers] = useState(teamMembers);
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Route render={() => <Navbar></Navbar>} />
          <Route render={() => <Hero></Hero>} />
          <Route render={() => <Members members={members}></Members>} />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;

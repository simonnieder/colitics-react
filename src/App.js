import Profile from "./components/Profile";
import Hero from "./components/Hero";
import Members from "./components/Members";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
      light: "#e8e8e8",
      dark: "#1f1f1f",
    },
    secondary: {
      main: "#D33F49",
      dark: "#a9323a",
      light: "#dc656d",
    },
  },
  typography: {
    h1: {
      fontFamily: "Montserrat",
      fontWeight: "600",
      fontSize: "5em",
    },
    body1: {
      fontFamily: "Hind Madurai",
      fontSize: "1.5em",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          <Route path="/" exact render={() => <Hero />} />
          <Route path="/" exact render={() => <Members />} />
          <Route path="/" exact render={() => <Contact />} />
          <Route path="/members/:name" render={() => <Profile />} />
          <Footer></Footer>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;

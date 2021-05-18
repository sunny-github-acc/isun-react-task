import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import backgroundImg from "./hero-bg.jpg";
import MenuContent from "./components/MenuContent";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Info from "./components/PersonalInfo";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import UpdateName from "./components/UpdateName";
import UpdateEmail from "./components/UpdateEmail";
import UpdateSubscribtion from "./components/UpdateSubscribtion";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundImage: `url(${backgroundImg})`,
      backgroundColor: "black",
      height: "100vh",
    },
    container: {
      margin: "0 auto",
      maxWidth: "1600px",
    },
  })
);

function App() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Router>
          <AuthProvider>
            <Navbar handleChange={handleChange} checked={checked} />
            <MenuContent checked={checked}></MenuContent>

            {!checked && (
              <Switch>
                <Route exact path="/" component={Info} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/update-profile" component={UpdateProfile} />
                <Route path="/update-name" component={UpdateName} />
                <Route path="/update-email" component={UpdateEmail} />
                <Route
                  path="/update-subscription"
                  component={UpdateSubscribtion}
                />
              </Switch>
            )}
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;

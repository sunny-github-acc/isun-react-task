import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import backgroundImg from "./hero-bg.jpg";
import MenuContent from "./components/MenuContent";
import Login from "./components/Login";
import Signup from "./components/Signup";

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
  const [checkedLogin, setCheckedLogin] = React.useState(false);
  const [checkedSignup, setCheckedSignup] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleMenu = () => {
    setChecked(false);
  };

  const handleLoginToggle = () => {
    setCheckedLogin(!checkedLogin);
  };

  const handleSignupToggle = () => {
    setCheckedSignup(!checkedSignup);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Navbar
          handleChange={handleChange}
          handleMenu={handleMenu}
          checked={checked}
          handleLoginToggle={handleLoginToggle}
          handleSignupToggle={handleSignupToggle}
        />
        <MenuContent checked={checked}></MenuContent>

        {checkedLogin ? (
          <Login handleLoginToggle={handleLoginToggle}></Login>
        ) : (
          ""
        )}
        {checkedSignup ? (
          <Signup handleSignupToggle={handleSignupToggle}></Signup>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;

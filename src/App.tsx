import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import backgroundImg from "./hero-bg.jpg";
import MenuContent from "./components/MenuContent";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundImage: `url(${backgroundImg})`,
      height: "100vh",
      backgroundSize: "cover",
    },
    container: {
      margin: "0 auto",
      maxWidth: "1600px",
      padding: "20px",
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
        <Navbar handleChange={handleChange} checked={checked} />
        <MenuContent checked={checked}></MenuContent>
      </div>
    </div>
  );
}

export default App;

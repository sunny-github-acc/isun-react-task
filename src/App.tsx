import { createStyles, makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import backgroundImg from "./hero-bg.jpg";

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
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Navbar />
      </div>
    </div>
  );
}

export default App;

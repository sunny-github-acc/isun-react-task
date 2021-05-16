import { createStyles, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "70px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      "z-index": "999",
    },
    menu: { color: "white" },
    signup: {
      fontSize: "18px",
      textTransform: "none",
      border: "1px solid white",
      marginRight: "10px",
      height: "40px",
    },
    menuButton: {
      color: "white",
      height: "40px",
      marginLeft: "10px",
      textTransform: "none",
      fontSize: "18px",
    },
    menuButtonText: {
      paddingRight: "15px",
    },
    menuButtonIcon: {
      height: "40px",
      width: "50px",
    },
    menuIcon: {
      height: "40px",
      color: "white",
    },
    title: {
      background: "#1E3AFF",
      color: "white",
      fontSize: "25px",
      fontWeight: "bold",
      width: "60px",
      lineHeight: "60px",
      textAlign: "center",
      textTransform: "none",
      borderRadius: "0",
      "&:hover": {
        background: "white",
        color: "#1E3AFF",
      },
    },
  })
);

export default function ButtonAppBar({ handleChange, checked }: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Button className={classes.title}>isun</Button>

        <Typography className={classes.menu}>
          <Button className={classes.signup} color="inherit">
            Sign up
          </Button>
          <Button className={classes.menuButton} onClick={handleChange}>
            {checked ? (
              <p className={classes.menuButtonText}> Close </p>
            ) : (
              <p className={classes.menuButtonText}> Menu </p>
            )}

            <MenuIcon className={classes.menuButtonIcon}></MenuIcon>
          </Button>
        </Typography>
      </Toolbar>
    </div>
  );
}

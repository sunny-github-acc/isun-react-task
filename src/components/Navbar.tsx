import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() =>
  createStyles({
    root: { padding: "20px" },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    menu: { color: "white" },
    menuButton: {},
    menuIcon: { width: "60px", height: "40px", color: "white" },
    title: {
      background: "#1E3AFF",
      color: "white",
      padding: "5px",
      fontSize: "25px",
      fontWeight: "bold",
      width: "60px",
      lineHeight: "60px",
      textAlign: "center",
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          isun
        </Typography>
        <Typography className={classes.menu}>
          Menu
          <IconButton className={classes.menuButton} aria-label="menu">
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </Typography>
      </Toolbar>
    </div>
  );
}

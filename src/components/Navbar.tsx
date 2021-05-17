import { createStyles, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import NavbarList from "./NavbarList";
import { listItems } from "./NavItems";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "70px",
      paddingTop: "20px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      "z-index": "999",
    },
    signup: {
      fontSize: "18px",
      textTransform: "none",
      border: "2px solid white",
      marginRight: "10px",
      height: "40px",
      padding: "0 20px 0 20px",
      whiteSpace: "nowrap",
      "&:hover": {
        background: "white",
        color: "#1A1D20",
      },
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "inline-flex",
      },
    },
    login: {
      fontSize: "18px",
      textTransform: "none",
      margin: "0 10px 0 10px",
      padding: "0 20px 0 20px",
      height: "40px",
      background: "white",
      color: "#1A1D20",
      whiteSpace: "nowrap",
      "&:hover": {
        color: "white",
      },
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "inline-flex",
      },
    },
    icons: {
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "inline-flex",
      },
      color: "white",
      margin: 0,
    },
    menu: {
      color: "white",
      display: "flex",
      alignItems: "center",
    },
    menuButton: {
      color: "white",
      height: "40px",
      marginLeft: "10px",
      textTransform: "none",
      fontSize: "18px",
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "inline-flex",
      },
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
    logo: {
      background: "#1E3AFF",
      color: "white",
      fontSize: "25px",
      fontWeight: "bold",
      width: "65px",
      lineHeight: "55px",
      textAlign: "center",
      textTransform: "none",
      borderRadius: "0",
      "&:hover": {
        background: "white",
        color: "#1E3AFF",
      },
    },
    list: { display: "flex", margin: 0 },
    nestedList: {
      display: "none",
      color: "white",
      [theme.breakpoints.up("md")]: {
        display: "inline-flex",
      },
    },
    listItem: {
      whiteSpace: "nowrap",
      color: "white",
      "&:hover": {
        color: "grey",
      },
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "inline-flex",
      },
    },
  })
);

export default function ButtonAppBar({
  theme,
  handleChange,
  handleMenu,
  handleLoginToggle,
  handleSignupToggle,
  checked,
}: any) {
  const classes = useStyles();
  const text = "What We Do";

  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Button className={classes.logo}>isun</Button>
        <Typography className={classes.menu}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.list}
          >
            <ListItem>
              <div className={classes.nestedList}>
                <NavbarList text={text}></NavbarList>
              </div>
            </ListItem>
            {listItems.map((item) => (
              <ListItem button className={classes.listItem} title={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          <Button
            className={classes.login}
            color="inherit"
            onClick={handleLoginToggle}
          >
            Log in
          </Button>
          <Button
            className={classes.signup}
            onClick={handleSignupToggle}
            color="inherit"
          >
            Sign up
          </Button>
          <Button className={classes.icons} onClick={handleLoginToggle}>
            <i className="material-icons">login</i>
          </Button>
          <Button className={classes.icons} onClick={handleSignupToggle}>
            <i className="material-icons">person_add</i>
          </Button>
          <Button className={classes.menuButton} onClick={handleChange}>
            {/* {checked ? (
              <p className={classes.menuButtonText}> Close </p>
            ) : (
              <p className={classes.menuButtonText}> Menu </p>
            )} */}

            <MenuIcon className={classes.menuButtonIcon}></MenuIcon>
          </Button>
        </Typography>
      </Toolbar>
    </div>
  );
}

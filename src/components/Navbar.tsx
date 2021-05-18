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
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useState } from "react";

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

export default function ButtonAppBar({ theme, handleChange, checked }: any) {
  const classes = useStyles();
  const text = "What We Do";
  const { currentUser } = useAuth();
  const history = useHistory();
  const { logout } = useAuth();
  const [error, setError] = useState("");

  const handleSignup = (e: any) => {
    e.preventDefault();
    history.push("/signup");
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    history.push("/login");
  };

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className={classes.root}>
      {" "}
      {error && (
        <div>
          <i className={`material-icons`}>warning</i>
          {error}
        </div>
      )}
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
              <ListItem
                key={item}
                button
                className={classes.listItem}
                title={item}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          {!currentUser && (
            <span>
              <Button
                className={classes.login}
                color="inherit"
                onClick={handleLogin}
              >
                Log in
              </Button>
              <Button
                className={classes.signup}
                onClick={handleSignup}
                color="inherit"
              >
                Sign up
              </Button>
              <Button className={classes.icons} onClick={handleLogin}>
                <i className="material-icons">login</i>
              </Button>
              <Button className={classes.icons} onClick={handleSignup}>
                <i className="material-icons">person_add</i>
              </Button>
            </span>
          )}{" "}
          {currentUser && (
            <span>
              <Button
                className={classes.signup}
                color="inherit"
                onClick={handleLogout}
              >
                Log out
              </Button>

              <Button className={classes.icons} onClick={handleLogin}>
                <i className="material-icons">logout</i>
              </Button>
            </span>
          )}
          <Button className={classes.menuButton} onClick={handleChange}>
            <MenuIcon className={classes.menuButtonIcon}></MenuIcon>
          </Button>
        </Typography>
      </Toolbar>
    </div>
  );
}

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      fontSize: "16px ",
    },
    title: {
      padding: "20px",
      textAlign: "center",
      color: "white",
      backgroundColor: "transparent",
      fontSize: "25px",
      [theme.breakpoints.up("md")]: {
        padding: "40px",
      },
    },
    container: {
      width: "90vw",
      display: "flex",
      justifyContent: "center",
    },
    grid: {
      display: "flex",
      justifyContent: "center",
    },
    tablet: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "inline-flex",
      },
    },
    paper: {
      padding: "12px",
      textAlign: "center",
      color: theme.palette.text.secondary,
      width: "80vw",
      margin: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      [theme.breakpoints.up("md")]: {
        justifyContent: "center",
      },
    },
    submit: {
      padding: "12px",
      backgroundColor: "#1E3AFF",
      margin: 0,
    },
    error: {
      color: "red",
      background: "pink",
    },
    icon: {
      paddingRight: "10px",
    },
  })
);

export default function CenteredGrid() {
  const classes = useStyles();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [userFirstName, setUserFirstName] = useState<any>();
  const [userLastName, setUserLastName] = useState<any>();
  const [userAllowEmails, setUserAllowEmails] = useState<any>();

  useEffect(() => {
    if (currentUser?.displayName) {
      const info = currentUser.displayName.split("#.#");
      setUserFirstName(info[0]);
      setUserLastName(info[1]);
      setUserAllowEmails(info[2]);
    }
  }, [currentUser.displayName]);

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  const handleUpdate = (e: any) => {
    e.preventDefault();
    history.push("/update-profile");
  };

  return (
    <div className={classes.root}>
      {currentUser && (
        <div>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.title}>
              Personal info
            </Paper>
          </Grid>
          <Grid className={classes.container} container spacing={3}>
            {error && (
              <div>
                {/* <Grid item xs={2} className={classes.grid}>
                  <Paper className={classes.error}>Error</Paper>
                </Grid> */}
                <Grid item xs={10} className={classes.grid}>
                  <Paper className={classes.error}>
                    <i className={`material-icons ${classes.icon}`}>warning</i>
                    {error}
                  </Paper>
                </Grid>
              </div>
            )}
            <Grid
              item
              xs={12}
              md={2}
              className={`${classes.grid} ${classes.tablet}`}
            >
              <Paper className={classes.paper}>Name</Paper>
            </Grid>
            <Grid item xs={12} md={9} className={classes.grid}>
              {/* <Paper className={classes.paper}>Name</Paper> */}

              <Paper className={classes.paper}>
                <i className={`material-icons ${classes.icon}`}>person</i>{" "}
                {userFirstName} {userLastName}
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              className={`${classes.grid} ${classes.tablet}`}
            >
              <Paper className={classes.paper}>Email</Paper>
            </Grid>
            <Grid item xs={12} md={9} className={classes.grid}>
              <Paper className={classes.paper}>
                <i className={`material-icons ${classes.icon}`}>email</i>{" "}
                {currentUser.email}
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              className={`${classes.grid} ${classes.tablet}`}
            >
              <Paper className={classes.paper}>Subscription</Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={9}
              className={classes.grid}
              onClick={handleUpdate}
            >
              <Paper className={classes.paper}>
                <i className={`material-icons ${classes.icon}`}>
                  notifications
                </i>
                {userAllowEmails === "true" ? (
                  <div>Subscribed</div>
                ) : (
                  <div>Not subscribed</div>
                )}
              </Paper>
            </Grid>
            <Grid item xs={12} md={11} className={classes.grid}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleUpdate}
              >
                {" "}
                Update Profile
              </Button>
            </Grid>
            <Grid item xs={12} md={11} className={classes.grid}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                onClick={handleLogout}
                style={{ background: "#999" }}
              >
                Log Out
              </Button>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
}

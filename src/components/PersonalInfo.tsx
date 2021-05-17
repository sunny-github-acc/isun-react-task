import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: "100vw",
      display: "flex",
      justifyContent: "center",
    },
    title: {
      padding: "40px",
      textAlign: "center",
      color: "white",
      backgroundColor: "transparent",
      fontSize: "25px",
    },
    container: {
      padding: "40px",
      width: "80vw",
      border: "1px solid #999",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "#1E3AFF",
    },
    error: {
      color: "red",
      background: "pink",
    },
  })
);

export default function CenteredGrid() {
  const classes = useStyles();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

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
              <Grid item xs={12}>
                <Paper className={classes.error}>{error}</Paper>
              </Grid>
            )}
            <Grid item xs={12}>
              <Paper className={classes.paper}>{currentUser.email}</Paper>
            </Grid>
            <Grid item xs={12} md={6}>
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
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleLogout}
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

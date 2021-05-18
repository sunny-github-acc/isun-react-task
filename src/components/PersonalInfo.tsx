import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100vw",
      display: "flex",
      fontSize: "16px ",
      justifyContent: "center",
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
    itemText: {
      display: "box",
      wordBreak: "break-all",
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
      width: "100%",
      marginTop: "5px",
      marginBottom: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      cursor: "pointer",
      [theme.breakpoints.up("md")]: {
        justifyContent: "center",
      },
    },
    submit: {
      padding: "12px",
      backgroundColor: "#1E3AFF",
      margin: 0,
      maxWidth: "200px",
    },
    error: {
      color: "red",
      background: "pink",
    },
    icon: {
      paddingRight: "10px",
    },
    more: {},
  })
);

export default function CenteredGrid() {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const history = useHistory();
  const [userFirstName, setUserFirstName] = useState<any>();
  const [userLastName, setUserLastName] = useState<any>();
  const [userAllowsEmails, setUserAllowsEmails] = useState<any>();

  useEffect(() => {
    if (currentUser?.displayName) {
      const info = currentUser.displayName.split("#.#");
      setUserFirstName(info[0]);
      setUserLastName(info[1]);
      setUserAllowsEmails(info[2]);
    }
  }, [currentUser?.displayName]);

  const handleUpdate = (e: any) => {
    e.preventDefault();
    history.push("/update-profile");
  };

  const handleName = () => {
    history.push("/update-name");
  };
  const handleEmail = () => {
    history.push("/update-email");
  };
  const handleSubscription = () => {
    history.push("/update-subscription");
  };

  return (
    <div className={classes.root}>
      {currentUser && (
        <Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.title}>
              Personal info
            </Paper>
          </Grid>
          <Grid className={classes.container} container spacing={3}>
            <Grid
              item
              xs={12}
              md={2}
              className={`${classes.grid} ${classes.tablet}`}
              onClick={handleName}
            >
              <Paper className={classes.paper}>Name</Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={9}
              className={classes.grid}
              onClick={handleName}
            >
              <Paper className={classes.paper}>
                <Grid item xs={2} className={`${classes.grid}  `}>
                  <i className={`material-icons ${classes.icon}`}>person</i>{" "}
                </Grid>
                <Grid
                  item
                  xs={8}
                  className={`${classes.grid} ${classes.itemText} `}
                >
                  {userFirstName} {userLastName}
                </Grid>
                <Grid item xs={2} className={`${classes.grid} `}>
                  <ChevronRight className={`  ${classes.more}`} />
                </Grid>
              </Paper>
            </Grid>

            <Grid
              item
              xs={12}
              md={2}
              className={`${classes.grid} ${classes.tablet}`}
            >
              <Paper className={classes.paper} onClick={handleEmail}>
                Email
              </Paper>
            </Grid>
            <Grid item xs={12} md={9} className={classes.grid}>
              <Paper className={classes.paper} onClick={handleEmail}>
                <Grid item xs={2} className={`${classes.grid}  `}>
                  <i className={`material-icons ${classes.icon}`}>email</i>{" "}
                </Grid>
                <Grid
                  item
                  xs={8}
                  className={`${classes.grid} ${classes.itemText} `}
                >
                  {currentUser.email}
                </Grid>
                <Grid item xs={2} className={`${classes.grid} `}>
                  <ChevronRight className={`  ${classes.more}`} />
                </Grid>
              </Paper>
            </Grid>

            <Grid
              item
              xs={12}
              md={2}
              className={`${classes.grid} ${classes.tablet}`}
            >
              <Paper className={classes.paper} onClick={handleSubscription}>
                {" "}
                Subscription
              </Paper>
            </Grid>
            <Grid item xs={12} md={9} className={classes.grid}>
              <Paper className={classes.paper} onClick={handleSubscription}>
                <Grid item xs={2} className={`${classes.grid}  `}>
                  <i className={`material-icons ${classes.icon}`}>
                    notifications
                  </i>{" "}
                </Grid>
                <Grid
                  item
                  xs={8}
                  className={`${classes.grid} ${classes.itemText} `}
                >
                  {userAllowsEmails === "true" ? (
                    <div>Subscribed</div>
                  ) : (
                    <div>Not subscribed</div>
                  )}
                </Grid>
                <Grid item xs={2} className={`${classes.grid} `}>
                  <ChevronRight className={`  ${classes.more}`} />
                </Grid>
              </Paper>
            </Grid>

            {/* <Grid
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
                <ChevronRight className={`${classes.tablet} ${classes.more}`} />
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
                {userAllowsEmails === "true" ? (
                  <div>Subscribed</div>
                ) : (
                  <div>Not subscribed</div>
                )}
                <ChevronRight className={`  ${classes.more}`} />
              </Paper>
            </Grid> */}
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
          </Grid>
        </Grid>
      )}
    </div>
  );
}

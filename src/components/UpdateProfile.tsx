import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import importImg from "../isun-icon.png";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Checkbox, FormControlLabel } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.isun.ch/">
        iSun
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    top: "0",
    left: "0",
    background: "#fff",
    width: "100vw",
    height: "100vh",
    "z-index": "999",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paperText: {
    marginTop: "40px",
  },
  logo: {
    height: "60px",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  formItem: {
    border: "1px solid white",
    "&::placeholder": {
      color: "white",
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#1E3AFF",
  },
  misc: {
    color: "#999",
  },
  error: {
    background: "pink",
    textAlign: "center",
  },
  link: { color: "white", textDecoration: "none" },
}));

export default function Login() {
  const classes = useStyles();
  const firstNameRef = useRef<any>();
  const lastNameRef = useRef<any>();
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const passwordConfirmRef = useRef<any>();
  const allowRef = useRef<any>();
  const [error, setError] = useState<any>("");
  const [loading, setLoading] = useState<any>(false);
  const history = useHistory();
  const { currentUser, updatePassword, updateEmail, updateUser }: any =
    useAuth();
  const [checked, setChecked] = useState<any>(false);

  let userFirstName: any, userLastName: any, userAllow: any;

  if (currentUser?.displayName) {
    [userFirstName, userLastName, userAllow] =
      currentUser.displayName.split("#.#");
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser?.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef?.current.value));
    }

    promises.push(
      updateUser(firstNameRef.current.value, lastNameRef.current.value, checked)
    );

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        return setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const handleLogo = (e: any) => {
    e.preventDefault();
    history.push("/");
  };

  const handleCancel = (e: any) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <div className={classes.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Button onClick={handleLogo}>
            <img className={classes.logo} src={importImg} alt="iSun logo" />
          </Button>
          <Typography component="h1" variant="h5" className={classes.paperText}>
            Update Profile
          </Typography>

          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              {error && (
                <Grid item xs={12}>
                  <TextField
                    className={classes.error}
                    variant="outlined"
                    fullWidth
                    id="error"
                    label={error}
                    name="error"
                    autoComplete="error"
                    error
                    disabled
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="first-name"
                  label="First Name"
                  name="first-name"
                  autoComplete="first name"
                  inputRef={firstNameRef}
                  defaultValue={userFirstName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="last-name"
                  label="Last Name"
                  name="last-name"
                  autoComplete="last name"
                  inputRef={lastNameRef}
                  defaultValue={userLastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={emailRef}
                  defaultValue={currentUser?.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputRef={passwordRef}
                  defaultValue={currentUser?.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="confirm-password"
                  label="Confirm password"
                  type="password"
                  id="confirm-password"
                  autoComplete="current-password"
                  inputRef={passwordConfirmRef}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                  inputRef={allowRef}
                  defaultValue={userAllow}
                  onChange={() => setChecked(!checked)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
              disabled={loading}
            >
              Update
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={loading}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

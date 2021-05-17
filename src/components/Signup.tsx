import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import importImg from "../isun-icon.png";
import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link as DomLink, useHistory } from "react-router-dom";

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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
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
}));

export default function SignUp() {
  const classes = useStyles();
  const firstNameRef = useRef<any>();
  const lastNameRef = useRef<any>();
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const passwordConfirmRef = useRef<any>();
  const allowRef = useRef<any>();
  const history = useHistory();
  const { signup }: any = useAuth();
  const [error, setError] = useState<any>("");
  const [firstNameError, setFirsNametError] = useState<any>([false, ""]);
  const [lastNameError, setLastNameError] = useState<any>([false, ""]);
  const [emailError, setEmailError] = useState<any>([false, ""]);
  const [passwordError, setPasswordError] = useState<any>([false, ""]);
  const [confirmPasswordError, setConfirmPasswordError] = useState<any>([
    false,
    "",
  ]);
  const [loading, setLoading] = useState<any>(false);
  let textFieldError = false;

  function emailValid(email: string) {
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  function passwordValid(password: any) {
    let re = {
      capital: /[A-Za-z]/,
      digit: /[0-9]/,
      full: /^.{6,28}$/,
    };

    return (
      re.capital.test(password) &&
      re.digit.test(password) &&
      re.full.test(password)
    );
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setConfirmPasswordError([true, "Passwords do not match"]);
      textFieldError = true;
    }

    if (firstNameRef.current.value === "") {
      setFirsNametError([true, "First name is required"]);
      textFieldError = true;
    } else {
      setFirsNametError([false, ""]);
    }

    if (lastNameRef.current.value === "") {
      setLastNameError([true, "Last name is required"]);
      textFieldError = true;
    } else {
      setLastNameError([false, ""]);
    }

    if (emailRef.current.value === "") {
      setEmailError([true, "Email is required"]);
      textFieldError = true;
    } else if (!emailValid(emailRef.current.value)) {
      setEmailError([true, "Email is not valid"]);
      textFieldError = true;
    } else {
      setEmailError([false, ""]);
    }

    if (passwordRef.current.value === "") {
      setPasswordError([true, "Password is required"]);
      textFieldError = true;
    } else if (!passwordValid(passwordRef.current.value)) {
      setPasswordError([true, "Password is not valid"]);
      textFieldError = true;
    } else {
      setPasswordError([false, ""]);
    }

    if (textFieldError) {
      return null;
    }

    try {
      setError("");
      setLoading(true);
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        firstNameRef.current.value,
        lastNameRef.current.value,
        allowRef.current.value
      );
      history.push("/");
    } catch {
      setError("Failed to create an account");
      setLoading(false);
    }
  }

  const handleLogo = (e: any) => {
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
            Sign up to iSun
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
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  inputRef={firstNameRef}
                  error={firstNameError[0]}
                  helperText={firstNameError[1]}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  inputRef={lastNameRef}
                  error={lastNameError[0]}
                  helperText={lastNameError[1]}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={emailRef}
                  error={emailError[0]}
                  helperText={emailError[1]}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputRef={passwordRef}
                  error={passwordError[0]}
                  helperText={passwordError[1]}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirm-password"
                  label="Confirm password"
                  type="password"
                  id="confirm-password"
                  autoComplete="current-password"
                  inputRef={passwordConfirmRef}
                  error={confirmPasswordError[0]}
                  helperText={confirmPasswordError[1]}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                  inputRef={allowRef}
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
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <DomLink className={classes.misc} to="/login">
                  Already have an account? Sign in
                </DomLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

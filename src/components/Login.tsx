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
import { Link as DomLink, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

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
}));

export default function Login() {
  const classes = useStyles();
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const rememberRef = useRef<any>();
  const { login }: any = useAuth();
  const [error, setError] = useState<any>("");
  const [loading, setLoading] = useState<any>(false);
  const history = useHistory();

  const handleLogo = (e: any) => {
    e.preventDefault();
    history.push("/");
  };

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className={classes.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Button onClick={handleLogo}>
            <img className={classes.logo} src={importImg} alt="iSun logo" />
          </Button>
          <Typography component="h1" variant="h5" className={classes.paperText}>
            Log in to iSun
          </Typography>
          <form className={classes.form} noValidate>
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              className={classes.formItem}
              inputRef={emailRef}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              className={classes.formItem}
              inputRef={passwordRef}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              inputRef={rememberRef}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
              disabled={loading}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <DomLink className={classes.misc} to="/forgot-password">
                  Forgot password?
                </DomLink>
              </Grid>
              <Grid item>
                <DomLink className={classes.misc} to="/signup">
                  Don't have an account? Sign Up
                </DomLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

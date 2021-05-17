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
  message: {
    background: "palegreen",
    textAlign: "center",
  },
}));

export default function Login({ handleLoginToggle }: any) {
  const classes = useStyles();
  const emailRef = useRef<any>();
  const { resetPassword }: any = useAuth();
  const [error, setError] = useState<any>("");
  const [loading, setLoading] = useState<any>(false);
  const history = useHistory();
  const [message, setMessage] = useState<any>("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
      history.push("/");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div className={classes.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Button onClick={handleLoginToggle}>
            <img className={classes.logo} src={importImg} alt="iSun logo" />
          </Button>
          <Typography component="h1" variant="h5" className={classes.paperText}>
            Password reset
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
            )}{" "}
            {message && (
              <Grid item xs={12}>
                <TextField
                  className={classes.message}
                  variant="outlined"
                  fullWidth
                  id="message"
                  label={message}
                  name="message"
                  autoComplete="message"
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
              disabled={loading}
            >
              Reset password
            </Button>
            <Grid container>
              <Grid item>
                Need an account?{" "}
                <DomLink className={classes.misc} to="/signup">
                  Sign Up
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

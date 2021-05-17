import React from "react";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import List from "./List";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MoneyHouseIcon from "./MoneyHouseIcon";
import PinDropIcon from "@material-ui/icons/PinDrop";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "inline-flex",
      },
    },
    container: {
      display: "flex",
    },
    wrapper: {},
    main: {
      height: "calc(100vh - 170px)",
      width: "100%",
      background: "transparent",
      color: "white",
      "z-index": "1",
      margin: "30px 30px 0 30px",
      display: "flex",
      alignItems: "center",
      position: "relative",
      left: "-20px",
    },
    side: {
      background: "transparent",
      display: "flex",
      justifyContent: "space-between",
      width: "120px",
    },
    a: {
      color: "white",
      display: "flex",
      paddingLeft: "20px",
    },
    aIcon: {
      height: "30px",
      width: "30px",
    },
  })
);

export default function SimpleSlide({ checked }: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
            <div>
              <Paper elevation={0} className={classes.main}>
                <List></List>
              </Paper>
              <Paper elevation={0} className={classes.side}>
                <a href="/#" className={classes.a}>
                  <LinkedInIcon className={classes.aIcon}></LinkedInIcon>
                </a>
                <a
                  href="/#"
                  className={classes.a}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <MoneyHouseIcon></MoneyHouseIcon>
                </a>
                <a href="/#" className={classes.a}>
                  <PinDropIcon className={classes.aIcon}></PinDropIcon>
                </a>
              </Paper>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}

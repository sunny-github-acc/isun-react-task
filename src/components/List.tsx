import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      background: "transparent",
    },
    listItem: {
      display: "flex",
      fontWeight: "bold",
      "& span, & svg": {
        fontSize: "1.8rem",
        fontWeight: "bold",
        lineHeight: "25px",
      },
    },
    nested: {
      paddingLeft: theme.spacing(4),
      color: "#999999",
      "& span, & svg": {
        fontSize: "1.2rem",
        fontWeight: "bold",
        lineHeight: "15px",
      },
      "&:hover": {
        color: "white",
      },
    },
  })
);

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onMouseEnter={handleOpen} onMouseLeave={handleClose}>
        <ListItemText
          primary="What We Do"
          title={"What We Do"}
          className={classes.listItem}
        />
        {open ? <ExpandMore /> : ""}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        >
          <ListItem
            button
            className={classes.nested}
            title={"Exchange Software"}
          >
            <ListItemText primary="Exchange Software" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            title={"Asset Digitization"}
          >
            <ListItemText primary="Asset Digitization" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            title={"Banking Software"}
          >
            <ListItemText primary="Banking Software" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            title={"Compliance Software Tool"}
          >
            <ListItemText primary="Compliance Software Tool" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            title={"Virtual/Physical Debit Card"}
          >
            <ListItemText primary="Virtual/Physical Debit Card" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            title={"Money Transfer Software"}
          >
            <ListItemText primary="Money Transfer Software" />
          </ListItem>
          <ListItem button className={classes.nested} title={"Payment Gateway"}>
            <ListItemText primary="Payment Gateway" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button className={classes.listItem} title={"Tech"}>
        <ListItemText primary="Tech" />
      </ListItem>
      <ListItem button className={classes.listItem} title={"Products"}>
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem button className={classes.listItem} title={"About Us"}>
        <ListItemText primary="About Us" />
      </ListItem>
      <ListItem button className={classes.listItem} title={"Get In Touch"}>
        <ListItemText primary="Get In Touch" />
      </ListItem>
    </List>
  );
}

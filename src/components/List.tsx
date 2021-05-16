import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { listItems, nestedListItems } from "./NavItems";

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
          {nestedListItems.map((item) => (
            <ListItem button className={classes.nested} title={item}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Collapse>

      {listItems.map((item) => (
        <ListItem button className={classes.listItem} title={item}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
}

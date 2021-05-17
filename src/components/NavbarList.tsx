import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { nestedListItems } from "./NavItems";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    padding: "0 20px 0 20px",
    borderRadius: 0,
    boxShadow: "0px  3px 15px rgba(255, 255, 255, 0.5)",
  },
})((props: MenuProps) => (
  <Menu
    elevation={5}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const useStyles = makeStyles((theme) =>
  createStyles({
    buttonText: {
      whiteSpace: "nowrap",
      color: "white",
      fontWeight: "bold",
      textTransform: "none",
    },
    nestedMenu: {
      marginTop: "20px",
      borderRadius: "0",
    },
    listItem: {
      fontWeight: "bold",
      fontSize: "13px",
      lineHeight: "13px",
      "&:hover": {
        color: "grey",
      },
    },
  })
);

export default function CustomizedMenus({ text }: any) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
        title={text}
        className={classes.buttonText}
      >
        {text}
        <ExpandMore />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.nestedMenu}
      >
        {nestedListItems.map((item) => (
          <ListItem
            key={item}
            onClick={handleClose}
            className={classes.listItem}
            component="nav"
            aria-labelledby="nested-list-subheader"
            button
            color="red"
          >
            <ListItemText color="red" primary={item.toUpperCase()} />
          </ListItem>
        ))}
      </StyledMenu>
    </ThemeProvider>
  );
}

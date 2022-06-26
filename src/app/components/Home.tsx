import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { fetchQuizRequest } from "../../store/quiz/quiz.redux";
import { Box, Container, Typography } from "@material-ui/core";
import { Quiz } from "./Quiz";


export const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    cardRoot: {
      width: "50rem",
    },
    flexContainer: {
      display: "flex",
      alignItems: "flex-start",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    closeIcon: {
      textAlign: "right",
      font: "normal normal normal 14px/19px Roboto",
      letterSpacing: "0px",
      color: "#666666",
    },
    customDrawerHeader: {
      textAlign: "left",
      font: "normal normal normal 18px/22px Roboto",
      letterSpacing: "0px",
      color: "#353535",
      opacity: 1,
      paddingTop: "0.8rem",
      paddingLeft: "1rem",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    media: {
      height: "15rem",
      width: "15rem",
    },
    flexCardContainer: {
      display: "flex",
      alignItems: "flex-start",
    },
    gridContainers: {
      maxHeight: "calc(100vh - 128px)",
      // height: "33px",
      // width: "249px",
      // padding: "6px 9px 3px 9px",
    },
  })
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const  ElevationScroll = (props: Props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuizRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Scroll to Elevate App Bar</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container style={{margin:'0px'}}>
        <div className={classes.drawerHeader} />
        <Quiz/>
      </Container>
    </React.Fragment>
  );
};

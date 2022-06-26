import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { fetchQuizRequest } from "../../store/quiz/quiz.redux";
import { Container } from "@material-ui/core";
import { Quiz } from "./quiz";
import { getUserData } from "../services/userService";

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
    },
    navBarUser:{
      color:"whitesmoke",
      fontSize: "1rem",
      fontFamily: "ui-serif",
      marginLeft:"87rem"
      }
  })
);

export const Home = () => {
  const classes = useStyles();
  const [userData,setUserData] = useState<string>();
  const dispatch = useDispatch();
  // const users = useSelector(getUserSelector);

  const getUserList = async() => {
    await getUserData().then((response)=>{
      console.log(response.data[0]?.name)
      setUserData(response.data[0]?.name);
    }
    );
   
  }
  useEffect(() => {
    dispatch(fetchQuizRequest());
    getUserList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
        <AppBar>
          <Toolbar>
            <div className={classes.navBarUser}>{`Hi` + ' ' + userData}</div>
          </Toolbar>
        </AppBar>
      <Toolbar />
      <Container style={{margin:'0px'}}>
        <div className={classes.drawerHeader} />
        <Quiz/>
      </Container>
    </React.Fragment>
  );
};

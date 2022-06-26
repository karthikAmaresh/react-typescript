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
    quiz: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
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
        <div className={classes.quiz} />
        <Quiz/>
      </Container>
    </React.Fragment>
  );
};

import React, { useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { drawerWidth } from "./Home";
import { IQuiz } from "../../store/quiz/quiz";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { getQuizSelector } from "../../store/quiz/quiz.selector";

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
      maxHeight: "calc(100vh - 128px)"
    },
    heading:{
      color: "steelblue",
    fontSize: "28px",
    fontFamily: "ui-serif",
    fontWeight: 800,
    margin: "0px 0px 3rem 18rem"
    }
  })
);

export const Quiz = () => {
  const quizList: IQuiz[] = useSelector(getQuizSelector);
  const classes = useStyles();
  return (
    <div className={classes.gridContainers}>
      <div className={classes.heading}>QUIZ</div>
      <div className={classes.flexCardContainer}>
        {quizList?.map((quiz: IQuiz, index) => (
          ((index%6) === 0 && (<div>
              <Card
                style={{
                  height: "21rem",
                  width: "14rem",
                  margin: "0rem 1rem 0rem 1rem",
                }}
              >
                <CardActionArea>
                  <CardMedia className={classes.media} image={quiz?.image} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      {quiz?.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {quiz?.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>))
        ))}
      </div>
    </div>
  );
};

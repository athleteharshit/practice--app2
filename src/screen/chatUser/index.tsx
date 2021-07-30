// import { useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Paper,
  Typography,
  Breadcrumbs,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { MessageBox } from "react-chat-elements";

import localImages from "../../utils/images";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chatSupportRoot: {},
    breadcrumb: {
      "& .MuiBreadcrumbs-separator": {
        fontSize: theme.spacing(2.4),
        margin: theme.spacing(0, 0.5),
      },
    },
    headerPaper: {
      padding: theme.spacing(1.5),
      borderRadius: 0,
    },
    heading: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        2.4
      )}px Roboto, sans-serif `,
      color: "var(--blue-grey)",
    },
    hover: {
      color: "var(--denim-blue)",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
    marginDiv: {
      backgroundColor: "var(--white)",
      margin: theme.spacing(1, 0.5),
      minHeight: "calc(100vh - 80px)",
    },
    paddingDiv: {
      padding: theme.spacing(0.1),
    },
    backgroundImg: {
      backgroundColor: "var(--user-chat-background-color)",
      background: `url(${localImages.USER_CHAT_IMG}) center center repeat`,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0.06,
    },
  })
);

const fakeDataFunction = (
  id: number,
  avatar: string,
  alt: string,
  title: string,
  subtitle: string,
  dateString: string,
  unread: number
) => {
  return {
    id,
    avatar,
    alt,
    title,
    subtitle,
    dateString,
    unread,
  };
};

const chatUser = [
  fakeDataFunction(
    1,
    "https://img.icons8.com/bubbles/2x/user.png",
    "harshit",
    "Harshit gupta",
    "What are you doing?",
    "a few hours ago",
    4
  ),
  fakeDataFunction(
    2,
    "https://img.icons8.com/color/2x/avatar.png",
    "harshit",
    "Jhon",
    "Whats up?",
    "just now",
    0
  ),
  fakeDataFunction(
    3,
    "https://img.icons8.com/plasticine/2x/user.png",
    "harshit",
    "Shivam yadev",
    "message on click (message(object) is returned)",
    "a few minutes ago",
    1
  ),
];

function ChatSupport() {
  const classes = useStyles();

  return (
    <div className={classes.chatSupportRoot}>
      <Paper className={classes.headerPaper}>
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
          <NavLink exact to="/chatSupport">
            <Typography className={[classes.heading, classes.hover].join(" ")}>
              Chat Support
            </Typography>
          </NavLink>
          <Typography className={classes.heading}>Harshit gupta</Typography>
        </Breadcrumbs>
      </Paper>
      <div className={classes.marginDiv}>
        <div className={classes.paddingDiv}>
          <div className={classes.backgroundImg}> </div>
          <MessageBox
            position={"left"}
            type={"text"}
            text={"What are you doing?"}
            // data={{
            //   uri: "https://facebook.github.io/react/img/logo.svg",
            //   status: {
            //     click: false,
            //     loading: 0,
            //   },
            // }}
            // title="harshit"
            dateString={"1:35 PM"}
          />
          <MessageBox
            position={"right"}
            type={"text"}
            text={"playing cricket and u?"}
            // data={{
            //   uri: "https://facebook.github.io/react/img/logo.svg",
            //   status: {
            //     click: false,
            //     loading: 0,
            //   },
            // }}
            // title="harshit"
            dateString={"1:35 PM"}
            status={"read"}
            notch={false}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatSupport;

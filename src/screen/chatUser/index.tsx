import { Fragment, useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Paper,
  Typography,
  Breadcrumbs,
  Input,
  IconButton,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { MessageBox, ChatItem } from "react-chat-elements";
import SendIcon from "@material-ui/icons/Send";

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
    marginDiv: {
      backgroundColor: "var(--white)",
      margin: theme.spacing(1, 0.5),
      minHeight: "calc(100vh - 80px)",
    },
    paddingDiv: {
      padding: theme.spacing(1),
    },
    hover: {
      color: "var(--denim-blue)",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
    chatsDiv: {
      // backgroundColor: "#ededed"
    },
    chatItem: {
      "& .rce-citem ": {
        backgroundColor: "var(--chat-background-color)",
        cursor: "default",
        "&:hover": {
          backgroundColor: "var(--chat-background-color)",
        },
      },
    },
    messagesBox: {
      backgroundColor: "var(--dim-blue)",
      padding: theme.spacing(1),
      height: "70vh",
      overflowY: "scroll",
    },
    sendBtnDiv: {
      backgroundColor: "var(--chat-background-color)",
      padding: theme.spacing(1),
    },
    sendMessageInput: {
      backgroundColor: "var(--white)",
      padding: theme.spacing(0.5, 2),
      width: "90%",
      borderRadius: theme.spacing(5),
    },
  })
);

function ChatUser() {
  const classes = useStyles();
  const [sendMessage, setSendMessage] = useState("");

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
          <div className={classes.chatsDiv}>
            <div className={classes.chatItem}>
              <ChatItem
                key={1}
                avatar={"https://img.icons8.com/clouds/2x/user.png"}
                alt={"Reactjs"}
                title={"Harshit gupta"}
                subtitle={"online"}
              />
            </div>
            <div className={classes.messagesBox}>
              {new Array(20).fill(20).map((item, index) => (
                <Fragment key={index}>
                  <MessageBox
                    id={"1"}
                    position={"left"}
                    type={"text"}
                    text={"hello whats up bro!"}
                    dateString={"2:34 PM"}
                  />
                  <MessageBox
                    id={"2"}
                    position={"right"}
                    type={"text"}
                    text={"fine bro!"}
                    dateString={"2:34 PM"}
                    status={"read"}
                  />
                </Fragment>
              ))}
            </div>
            <div className={classes.sendBtnDiv}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("call", sendMessage);
                }}
              >
                <Input
                  className={classes.sendMessageInput}
                  id="sendMessage"
                  type="textarea"
                  value={sendMessage}
                  placeholder="Type a message"
                  disableUnderline
                  onChange={(e) => setSendMessage(e.target.value)}
                />
                <IconButton type="submit">
                  <SendIcon />
                </IconButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatUser;

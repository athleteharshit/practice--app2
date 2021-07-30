import { useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Paper,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ChatItem } from "react-chat-elements";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chatSupportRoot: {},
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
  const history = useHistory();
  const [chatItem] = useState(chatUser);

  return (
    <div className={classes.chatSupportRoot}>
      <Paper className={classes.headerPaper}>
        <Typography className={classes.heading}>Chat Support</Typography>
      </Paper>
      <div className={classes.marginDiv}>
        <div className={classes.paddingDiv}>
          {chatItem && chatItem.length > 0 ? (
            chatItem.map((item) => (
              <ChatItem
                key={item.id}
                avatar={item.avatar}
                alt={item.alt}
                title={item.title}
                subtitle={item.subtitle}
                dateString={item.dateString}
                unread={item.unread}
                onClick={() => {
                  history.push(`/chatSupport/chatUser/${item.id}`);
                }}
              />
            ))
          ) : (
            <Typography className={classes.heading}>
              No conversions chat
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatSupport;

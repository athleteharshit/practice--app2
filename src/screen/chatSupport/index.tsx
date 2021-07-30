import {
  makeStyles,
  createStyles,
  Theme,
  Paper,
  Typography,
} from "@material-ui/core";
import { ChatItem } from "react-chat-elements";
import { useHistory } from "react-router-dom";

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

function ChatSupport() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.chatSupportRoot}>
      <Paper className={classes.headerPaper}>
        <Typography className={classes.heading}>Chat Support</Typography>
      </Paper>
      <div className={classes.marginDiv}>
        <div className={classes.paddingDiv}>
          {new Array(4).fill(10).map((item, index) => (
            <ChatItem
              key={index}
              avatar={"https://img.icons8.com/clouds/2x/user.png"}
              alt={"Reactjs"}
              title={"Harshit gupta"}
              subtitle={"What are you doing?"}
              date={new Date()}
              unread={index}
              onClick={() => {
                history.push(`/chatSupport/chatUser/${index + 1}`);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatSupport;

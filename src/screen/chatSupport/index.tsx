import {
  makeStyles,
  createStyles,
  Theme,
  Paper,
  Typography,
} from "@material-ui/core";

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
    gridContainer: {
      padding: theme.spacing(1),
    },
  })
);

function ChatSupport() {
  const classes = useStyles();
  return (
    <div className={classes.chatSupportRoot}>
      <Paper className={classes.headerPaper}>
        <Typography className={classes.heading}>Chat Support</Typography>
      </Paper>
    </div>
  );
}

export default ChatSupport;

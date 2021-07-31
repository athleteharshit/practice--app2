import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Paper,
  List,
  ListItem,
  Card,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loanRequestRoot: {},
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
    card: {
      boxShadow: "none",
      width: "100%",
      backgroundColor: "transparent",
      "& .MuiCardHeader-action": {
        margin: 0,
        alignSelf: "center",
        font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
          2.5
        )}px Ubuntu, sans-serif `,
        color: "var(--blue-grey)",
      },
      "& .MuiCardHeader-title": {
        font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
          1.6
        )}px Ubuntu, sans-serif `,
        color: "var(--black)",
        marginBottom: theme.spacing(0.5),
      },
      "& .MuiCardHeader-subheader": {
        font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
          1.4
        )}px Ubuntu, sans-serif `,
        color: "var(--blue-grey)",
      },
    },
    cardHeader: {
      padding: 0,
    },
    avatar: {
      width: 55,
      height: 55,
    },
  })
);

function LoanRequest() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.loanRequestRoot}>
      <Paper className={classes.headerPaper}>
        <Typography className={classes.heading}>Loan Request</Typography>
      </Paper>
      <div className={classes.marginDiv}>
        <div className={classes.paddingDiv}>
          <List aria-label="loan request">
            {new Array(4).fill(0).map((i, index) => (
              <ListItem
                key={index}
                button
                onClick={() => {
                  history.push(`/loanRequest/loanRequestDetails/${index + 1}`);
                }}
              >
                <Card className={classes.card}>
                  <CardHeader
                    className={classes.cardHeader}
                    avatar={
                      <Avatar
                        aria-label="recipe"
                        className={classes.avatar}
                        src="https://img.icons8.com/bubbles/2x/user.png"
                      />
                    }
                    action={"$200"}
                    title="Harshit gupta"
                    subheader="Automotive, September 14, 2016"
                  />
                </Card>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}

export default LoanRequest;

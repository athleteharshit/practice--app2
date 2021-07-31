import {
  makeStyles,
  createStyles,
  Theme,
  Paper,
  Typography,
  Breadcrumbs,
  Grid,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

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
      padding: theme.spacing(1),
      position: "relative",
    },
    leftPaper: {
      padding: theme.spacing(1),
    },
  })
);

function LoanRequestDetails() {
  const classes = useStyles();
  return (
    <div className={classes.chatSupportRoot}>
      <Paper className={classes.headerPaper}>
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
          <NavLink exact to="/loanRequest">
            <Typography className={[classes.heading, classes.hover].join(" ")}>
              Loan Request
            </Typography>
          </NavLink>
          <Typography className={classes.heading}>Harshit gupta</Typography>
        </Breadcrumbs>
      </Paper>
      <div className={classes.marginDiv}>
        <div className={classes.paddingDiv}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.leftPaper}>
                <Typography className={classes.heading}>
                  Request Details
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>harshit one</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default LoanRequestDetails;

import {
  makeStyles,
  createStyles,
  Theme,
  Paper,
  Typography,
  Breadcrumbs,
  Grid,
  Divider,
  Button,
  Link,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
// import axios from "axios";

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
      backgroundColor: "var(--dim-blue)",
    },
    headingRequest: {
      textAlign: "center",
    },
    divider: {
      width: "100%",
      margin: theme.spacing(1, 0),
    },
    headingAndCaptionDiv: {
      margin: theme.spacing(1, 0),
      display: "flex",
      alignItems: "center",
    },
    detailsHeading: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        2
      )}px Roboto, sans-serif `,
      color: "var(--black)",
    },
    captionsDetailsHeading: {
      font: `normal 400 ${theme.spacing(1.7)}px Ubuntu, sans-serif `,
      color: "var(--blue-grey)",
      marginLeft: theme.spacing(1),
    },
    btnDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      marginTop: theme.spacing(4),
    },
    approveBtn: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.6
      )}px Roboto, sans-serif `,
      color: "var(--white)",
      padding: theme.spacing(1.3, 4),
      marginBottom: theme.spacing(2),
      borderRadius: 50,
      width: "60%",
    },
    declineBtn: {
      backgroundColor: theme.palette.error.main,
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.6
      )}px Roboto, sans-serif `,
      color: "var(--white)",
      "&:hover": {
        backgroundColor: theme.palette.error.light,
      },
      padding: theme.spacing(1.3, 4),
      borderRadius: 50,
      width: "60%",
    },
  })
);

function LoanRequestDetails() {
  const classes = useStyles();

  // const requestOptions = {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     language: "en",
  //     platform: "1",
  //   },
  //   body: JSON.stringify({
  //     email: "creditexpress@yopmail.com",
  //     password: "Admin",
  //     deviceId: "string",
  //     platform: "3",
  //     // deviceToken: "string",
  //   }),
  // };

  // // curl -X POST "http://18.191.245.6:9001/api/v1/admin/login" -H  "accept: application/json" -H  "platform: 3" -H  "language: en" -H  "Content-Type: application/json" -d "{  \"email\": \"creditexpress@yopmail.com\",  \"password\": \"Admin@123\",  \"deviceId\": \"string\",  \"platform\": \"3\",  \"deviceToken\": \"string\"}"

  // const fetchDat = async () => {
  //   const response = await fetch(
  //     "http://18.191.245.6:9001/api/v1/admin/login",
  //     requestOptions
  //   );

  //   const data = await response.json();
  //   console.log(data);
  // };

  // const fetchAxios = async () => {
  //   const response = await axios.post(
  //     "http://18.191.245.6:9001/api/v1/admin/login",
  //     {
  //       email: "creditexpress@yopmail.com",
  //       password: "Admin",
  //       deviceId: "string",
  //       platform: "3",
  //       deviceToken: "string",
  //     }
  //   );

  //   console.log(response, "response");
  // };

  // fetchAxios();
  // fetchDat();

  const headingCard = (heading: string, subHeading: any) => {
    return (
      <div className={classes.headingAndCaptionDiv}>
        <Typography className={classes.detailsHeading} variant="h5">
          {heading}:
        </Typography>
        <Typography className={classes.captionsDetailsHeading} variant="body1">
          {subHeading}
        </Typography>
      </div>
    );
  };

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
                <Typography
                  className={[classes.heading, classes.headingRequest].join(
                    " "
                  )}
                >
                  Request Details
                </Typography>
                <Divider className={classes.divider} />
                <div>
                  {headingCard("Category", " Automotive")}
                  {headingCard("Company", " ZANDA AUTO PART")}
                  {headingCard("Request Amount", " $500")}
                  {headingCard("Date", " 1 Aug 2021")}
                  {headingCard("Time", "  2:45 PM")}
                </div>
              </Paper>
              <div className={classes.btnDiv}>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.approveBtn}
                >
                  Approve
                </Button>
                <Button variant="contained" className={classes.declineBtn}>
                  Decline
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.leftPaper}>
                <Typography
                  className={[classes.heading, classes.headingRequest].join(
                    " "
                  )}
                >
                  User Details
                </Typography>
                <Divider className={classes.divider} />
                <div>
                  {headingCard("Name", "Harshit gupta")}
                  {headingCard("DOB", "26 Jan 1997")}
                  {headingCard("Gender", "Male")}
                  {headingCard("Address", "Kanpur, India")}
                  {headingCard("Employer", "2:45 PM")}
                  {headingCard("Emp. Address", "Delhi, India")}
                  {headingCard("Ocuupation", "Developer")}
                  {headingCard("Salary", "20, 000")}
                  {headingCard("Phone", "7388544179")}
                  {headingCard("Email", "email545gmail.com")}
                  {headingCard("ID Proof", <Link>view</Link>)}
                  {headingCard("Address Proof", <Link>view</Link>)}
                  {headingCard("Income Proof", <Link>view</Link>)}
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default LoanRequestDetails;

import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Paper,
  Button,
  Breadcrumbs,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import { NavLink, useHistory } from "react-router-dom";

// ********** icons * *

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    companyDatailsRoot: {},
    breadcrumb: {
      "& .MuiBreadcrumbs-separator": {
        fontSize: theme.spacing(2.4),
        margin: theme.spacing(0, 0.5),
      },
    },
    headerPaper: {
      padding: theme.spacing(1),
      borderRadius: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    heading: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        2.4
      )}px Roboto, sans-serif `,
      color: "var(--blue-grey)",
    },
    hover: {
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
    loginBtn: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.6
      )}px Roboto, sans-serif `,
      color: "var(--white)",
      padding: theme.spacing(1, 2),
    },
    detailsDiv: {
      backgroundColor: "var(--white)",
      margin: theme.spacing(1, 0.5),
      minHeight: "calc(100vh - 80px)",
    },
    gridContainer: {
      padding: theme.spacing(1),
    },
    gridItemDetails: {
      paddingRight: theme.spacing(2),
    },
    headingAndCaptionDiv: {
      margin: theme.spacing(1, 0),
    },
    detailsHeading: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        2.4
      )}px Roboto, sans-serif `,
      color: "var(--black)",
    },
    captionsDetailsHeading: {
      font: `normal 400 ${theme.spacing(1.8)}px Ubuntu, sans-serif `,
      color: "var(--blue-grey)",
      marginTop: theme.spacing(0.5),
    },
    card: {
      width: 350,
    },
    media: {
      height: 230,
    },
  })
);

function CompanyDetails() {
  const classes = useStyles();
  const history = useHistory();
  // const params = useParams();

  return (
    <div className={classes.companyDatailsRoot}>
      <Paper className={classes.headerPaper}>
        <div>
          <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
            <NavLink exact to="/companies">
              <Typography
                className={[classes.heading, classes.hover].join(" ")}
              >
                Companies
              </Typography>
            </NavLink>
            <Typography className={classes.heading}>Company Detail</Typography>
          </Breadcrumbs>
        </div>
        <div>
          <Button
            className={classes.loginBtn}
            color="primary"
            variant="contained"
            onClick={() => {
              history.push("/companies/addCompanies?type=edit");
            }}
          >
            Edit
          </Button>
        </div>
      </Paper>
      <div className={classes.detailsDiv}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={7} className={classes.gridItemDetails}>
            <div className={classes.headingAndCaptionDiv}>
              <Typography className={classes.detailsHeading} variant="h5">
                Category:
              </Typography>
              <Typography
                className={classes.captionsDetailsHeading}
                variant="body1"
              >
                Home loan
              </Typography>
            </div>
            <div className={classes.headingAndCaptionDiv}>
              <Typography className={classes.detailsHeading} variant="h5">
                Company name:
              </Typography>
              <Typography
                className={classes.captionsDetailsHeading}
                variant="body1"
              >
                Facebook
              </Typography>
            </div>
            <div className={classes.headingAndCaptionDiv}>
              <Typography className={classes.detailsHeading} variant="h5">
                Contact:
              </Typography>
              <Typography
                className={classes.captionsDetailsHeading}
                variant="body1"
              >
                472-465-5444
              </Typography>
            </div>
            <div className={classes.headingAndCaptionDiv}>
              <Typography className={classes.detailsHeading} variant="h5">
                Amount:
              </Typography>
              <Typography
                className={classes.captionsDetailsHeading}
                variant="body1"
              >
                10,000$
              </Typography>
            </div>
            <div className={classes.headingAndCaptionDiv}>
              <Typography className={classes.detailsHeading} variant="h5">
                Discription:
              </Typography>
              <Typography
                className={classes.captionsDetailsHeading}
                variant="body1"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti ullam ipsum assumenda. Vel, nesciunt odit aut, illo
                deserunt repudiandae distinctio enim cum id similique sunt
                officia quasi totam corrupti facere aspernatur eos! Quas nulla,
                quos, magni rerum eveniet natus animi reiciendis inventore
                necessitatibus dolorem labore tenetur officia? Quo eos vitae
                ullam, molestiae rerum odio delectus in fuga consequuntur
                veritatis modi voluptas iure earum commodi optio. Quo voluptate
                perspiciatis rem totam, maxime earum magnam laborum eaque
                voluptatum modi consequuntur numquam a quas possimus incidunt
                iste ratione doloribus nesciunt? Saepe et dignissimos est earum,
                reprehenderit reiciendis, doloribus labore voluptatem,
                consectetur alias numquam?
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1627386172141-c6fec8bf5aa3?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  title="home loan"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CompanyDetails;

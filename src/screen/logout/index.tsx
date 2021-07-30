import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Button,
} from "@material-ui/core";

type AppProps = {
  handleClose: any;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logoutRoot: {},
    deleteDiv: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    btnDiv: {
      marginTop: theme.spacing(3),
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      width: "100%",
    },
    yesBtn: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.6
      )}px Roboto, sans-serif `,
      color: "var(--white)",
      padding: theme.spacing(1, 4),
    },
    noBtn: {
      backgroundColor: theme.palette.error.main,
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.6
      )}px Roboto, sans-serif `,
      color: "var(--white)",
      padding: theme.spacing(1, 4),
      "&:hover": {
        backgroundColor: theme.palette.error.light,
      },
    },
    noRecord: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        3
      )}px Roboto, sans-serif`,
      color: "var(--status-grey)",
    },
  })
);

function Logout({ handleClose }: AppProps) {
  const classes = useStyles();
  return (
    <div className={classes.logoutRoot}>
      <div className={classes.deleteDiv}>
        <Typography variant="h5" className={classes.noRecord}>
          Are you sure ?
        </Typography>
        <div className={classes.btnDiv}>
          <Button
            color="primary"
            variant="contained"
            className={classes.yesBtn}
            onClick={() => {
              handleClose();
            }}
          >
            Logout
          </Button>
          <Button
            variant="contained"
            className={classes.noBtn}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Logout;

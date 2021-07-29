import { makeStyles, createStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    addCompaniesRoot: {},
    heading: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        2.4
      )}px Roboto, sans-serif `,
      color: "var(--blue-grey)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: theme.spacing(2),
    },
  })
);

function AddCompanies() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.heading}>Add Company</Typography>
    </div>
  );
}

export default AddCompanies;

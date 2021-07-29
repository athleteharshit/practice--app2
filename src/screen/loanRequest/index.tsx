import { makeStyles, createStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loanRequestRoot: {},
  })
);

function LoanRequest() {
  const classes = useStyles();
  return (
    <div className={classes.loanRequestRoot}>
      <Typography>Loan Request Page Under Development</Typography>
    </div>
  );
}

export default LoanRequest;

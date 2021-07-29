import { useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Paper,
  Typography,
  Button,
  InputBase,
  IconButton,
} from "@material-ui/core";

// * * * * * * * * * * icons * *
import SearchIcon from "@material-ui/icons/Search";
import CompaniesTable from "./companiesTable";
import MainModal from "../../components/mainModal";
import AddCompanies from "./addCompanies";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    companiesRoot: {},
    headerPaper: {
      padding: theme.spacing(0.7, 1),
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
    loginBtn: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.6
      )}px Roboto, sans-serif `,
      color: "var(--white)",
      padding: theme.spacing(1, 2),
    },
  })
);

function Companies() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(searchTerm);
    setSearchTerm("");
  };

  return (
    <>
      <div className={classes.companiesRoot}>
        <Paper className={classes.headerPaper}>
          <div>
            <Typography className={classes.heading}>Companies</Typography>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <InputBase
                placeholder="Search company"
                inputProps={{ "aria-label": "search users" }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </form>
          </div>
          <div>
            <Button
              className={classes.loginBtn}
              color="primary"
              variant="contained"
              onClick={() => setOpenModal(true)}
            >
              Add Company
            </Button>
          </div>
        </Paper>
        <CompaniesTable />
      </div>
      <MainModal open={openModal} handleClose={handleClose}>
        <AddCompanies />
      </MainModal>
    </>
  );
}

export default Companies;

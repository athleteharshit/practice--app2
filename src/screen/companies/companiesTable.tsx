import { useEffect, useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableFooter,
  TablePagination,
  Typography,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompaniesList } from "./action";
import { ReducerModal } from "../../modal";
import { useHistory } from "react-router-dom";

// ********** components ********
import MainModal from "../../components/mainModal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    companiesTableRoot: {
      margin: theme.spacing(1, 0.5),
      backgroundColor: "var(--white)",
    },
    tabelContainer: {
      padding: theme.spacing(0.5),
    },
    tableHead: {
      backgroundColor: "var(--background-grey)",
      "& th": {
        padding: theme.spacing(1),
        font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
          1.8
        )}px/${theme.spacing(1.8)}px Roboto, sans-serif`,
        color: "var(--blue-grey)",
        textTransform: "uppercase",
      },
    },
    tableBody: {
      cursor: "pointer",
      "& td": {
        padding: theme.spacing(1),
        font: `normal normal ${theme.spacing(1.6)}px Roboto, sans-serif`,
        color: "var(--status-grey)",
      },
    },
    tableFooter: {
      backgroundColor: "var(--background-grey)",
    },
    noRecord: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        3
      )}px Roboto, sans-serif`,
      color: "var(--status-grey)",
    },
    deletBtn: {
      backgroundColor: theme.palette.error.main,
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.4
      )}px Roboto, sans-serif `,
      color: "var(--white)",
      padding: theme.spacing(0.7, 1.1),
      "&:hover": {
        backgroundColor: theme.palette.error.light,
      },
    },
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
  })
);

function CompaniesTable() {
  const classes = useStyles();
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(9);
  const dispatch = useDispatch();
  const { companiesList } = useSelector(
    (state: ReducerModal) => state.companiesListReducer
  );

  useEffect(() => {
    dispatch(fetchCompaniesList());
  }, [dispatch]);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleDeleteBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    setOpenModal(true);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowPerPage(event.target.value);
  };

  return (
    <>
      <div className={classes.companiesTableRoot}>
        <TableContainer className={classes.tabelContainer}>
          <Table>
            <TableHead>
              <TableRow className={classes.tableHead}>
                <TableCell>Name</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.tableBody}>
              {companiesList && companiesList.length > 0 ? (
                companiesList
                  .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
                  .map((user: any) => (
                    <TableRow
                      key={user.id}
                      hover
                      onClick={() => {
                        history.push(`/companies/companyDetails/${user.id}`);
                      }}
                    >
                      <TableCell>{user.company_name}</TableCell>
                      <TableCell>{user.company_contact}</TableCell>
                      <TableCell>{user.amount}</TableCell>
                      <TableCell>
                        <Button
                          className={classes.deletBtn}
                          variant="contained"
                          onClick={(e) => handleDeleteBtn(e, user.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow hover>
                  <TableCell colSpan={5} align="center">
                    <Typography variant="h5" className={classes.noRecord}>
                      No Records
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow className={classes.tableFooter}>
                <TablePagination
                  rowsPerPageOptions={[9, 15, 25, { label: "All", value: -1 }]}
                  colSpan={5}
                  count={companiesList.length}
                  page={page}
                  rowsPerPage={rowPerPage}
                  onPageChange={handleChangePage}
                  labelDisplayedRows={({ from, to, count }) =>
                    `  ${from}-${to} of  ${count} `
                  }
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
      <MainModal open={openModal} handleClose={handleClose}>
        <div className={classes.deleteDiv}>
          <Typography variant="h5" className={classes.noRecord}>
            Are you sure ?
          </Typography>
          <div className={classes.btnDiv}>
            <Button
              color="primary"
              variant="contained"
              className={classes.yesBtn}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              className={classes.noBtn}
              onClick={handleClose}
            >
              N0
            </Button>
          </div>
        </div>
      </MainModal>
    </>
  );
}

export default CompaniesTable;

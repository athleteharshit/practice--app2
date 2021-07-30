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
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersList } from "./action";
import { ReducerModal } from "../../modal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    usersTableRoot: {
      margin: theme.spacing(1, 0.5),
      backgroundColor: "var(--white)",
      minHeight: "calc(100vh - 80px)",
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
      "& td": {
        padding: theme.spacing(1.5, 1),
        font: `normal normal ${theme.spacing(1.6)}px Roboto, sans-serif`,
        color: "var(--status-grey)",
      },
    },
    tableFooter: {
      backgroundColor: "var(--background-grey)",
    },
    noRecord: {
      font: `normal normal ${theme.spacing(2)}px/${theme.spacing(
        2
      )}px Roboto, sans-serif`,
      color: "var(--status-grey)",
    },
  })
);

function UsersTable() {
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(9);

  const classes = useStyles();
  const dispatch = useDispatch();
  const { usersList } = useSelector(
    (state: ReducerModal) => state.usersListReducer
  );
  useEffect(() => {
    dispatch(fetchUsersList());
  }, [dispatch]);

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
    <div className={classes.usersTableRoot}>
      <TableContainer className={classes.tabelContainer}>
        <Table>
          <TableHead>
            <TableRow className={classes.tableHead}>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {usersList && usersList.length > 0 ? (
              usersList
                .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
                .map((user: any) => (
                  <TableRow key={user.id} hover>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.company}</TableCell>
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
                count={usersList.length}
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
  );
}

export default UsersTable;

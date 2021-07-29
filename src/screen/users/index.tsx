import { useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Paper,
  Typography,
  InputBase,
  IconButton,
} from "@material-ui/core";

// * * * * * * * * * * icons * *
import SearchIcon from "@material-ui/icons/Search";
import UsersTable from "./usersTable";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    usersRoot: {},
    headerPaper: {
      padding: theme.spacing(0.5, 1),
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
  })
);

function Users() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(searchTerm);
    setSearchTerm("");
  };

  return (
    <div className={classes.usersRoot}>
      <Paper className={classes.headerPaper}>
        <div>
          <Typography className={classes.heading}>Users</Typography>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <InputBase
              placeholder="Search Users"
              inputProps={{ "aria-label": "search users" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </form>
        </div>
      </Paper>
      <UsersTable />
    </div>
  );
}

export default Users;

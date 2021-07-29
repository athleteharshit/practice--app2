import { useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";

// ********** components ****************
import MainModal from "../../components/mainModal";
import CategoriesList from "./categoriesList";
import AddCatogory from "./addCategory";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    categoriesRoot: {},
    headerPaper: {
      padding: theme.spacing(1, 1),
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

function Categories() {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className={classes.categoriesRoot}>
        <Paper className={classes.headerPaper}>
          <div>
            <Typography className={classes.heading}>Categories</Typography>
          </div>
          <div>
            <Button
              className={classes.loginBtn}
              color="primary"
              variant="contained"
              onClick={() => setOpenModal(true)}
            >
              Add Category
            </Button>
          </div>
        </Paper>
        <CategoriesList />
      </div>
      <MainModal open={openModal} handleClose={handleClose}>
        <AddCatogory handleClose={handleClose} />
      </MainModal>
    </>
  );
}

export default Categories;

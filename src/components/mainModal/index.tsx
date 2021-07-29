import { makeStyles, createStyles, Theme, Modal } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 3),
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  })
);

function MainModal({ open, handleClose, children }: any) {
  const classes = useStyles();
  return (
    <Modal open={open} onClose={handleClose}>
      <div className={classes.paper}>{children}</div>
    </Modal>
  );
}

export default MainModal;

import { makeStyles, createStyles, Theme } from "@material-ui/core";

// ******************************* components *******************************
import Sidebar from "../sidebar";

type AppProps = {
  children?: React.ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: "flex",
    },
    sidebarDiv: {
      flexBasis: "17%",
      backgroundColor: theme.palette.secondary.light,
    },
    rightContainer: { flexBasis: "83%", backgroundColor: "#f5f5f5" },
  })
);

function Container({ children }: AppProps) {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.sidebarDiv}>
        <Sidebar />
      </div>
      <div className={classes.rightContainer}>{children}</div>
    </div>
  );
}

export default Container;

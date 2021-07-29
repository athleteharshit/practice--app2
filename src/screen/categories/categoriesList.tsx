import { useEffect } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  Backdrop,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { ReducerModal } from "../../modal";
import { fetchCategoriesList } from "./action";

import MainLoader from "../../components/mainLoader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    categoriesListRoot: {
      margin: theme.spacing(1, 0.5),
      backgroundColor: "var(--white)",
    },
    gridDiv: {
      padding: theme.spacing(0.5),
    },
    gridItem: {
      padding: theme.spacing(1),
    },
    media: {
      height: 230,
    },
    cardAction: {
      padding: theme.spacing(1.2),
      justifyContent: "center",
    },
    captions: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        2
      )}px Roboto, sans-serif `,
      color: "var(--blue-grey)",
    },
  })
);

function CategoriesList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state: ReducerModal) => state.globalLoaderReducer
  );
  const { categoriesList } = useSelector(
    (state: ReducerModal) => state.categoriesListReducer
  );

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  return (
    <div className={classes.categoriesListRoot}>
      <Backdrop open={isLoading} className={classes.backdrop}>
        <MainLoader loading={true} size={100} />
      </Backdrop>
      <div className={classes.gridDiv}>
        <Grid container>
          {categoriesList && categoriesList.length > 0 ? (
            categoriesList.map((item: any) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                className={classes.gridItem}
                key={item.id}
              >
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={item.company_img}
                      title={item.company_name}
                    />
                  </CardActionArea>
                  <CardActions className={classes.cardAction}>
                    <Typography variant="body1" className={classes.captions}>
                      {item.company_name}
                    </Typography>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="body1" className={classes.captions}>
              no companies
            </Typography>
          )}
        </Grid>
      </div>
    </div>
  );
}

export default CategoriesList;

import { useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

// ******************************* icons and components *******************************
import AppleIcon from "@material-ui/icons/Apple";
import PersonIcon from "@material-ui/icons/Person";
import CategoryIcon from "@material-ui/icons/Category";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MainModal from "../mainModal";
import Logout from "../../screen/logout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebarRoot: {
      backgroundColor: theme.palette.secondary.light,
      minHeight: "100vh",
      padding: theme.spacing(1),
      minWidth: 200,
    },
    logoAndCompany: {
      display: "flex",
      alignItems: "center",
    },
    imgDiv: {
      width: "50px",
      height: "50px",
    },
    img: {
      width: "100%",
      fontSize: theme.spacing(5),
      color: theme.palette.primary.main,
    },
    companyHeading: {
      color: theme.palette.primary.main,
      marginLeft: theme.spacing(0.5),
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        2.5
      )}px Roboto, sans-serif `,
    },
    listDiv: {},
    listItem: {
      color: "var(--blue-grey)",
      margin: theme.spacing(1.5, 0),
      "& .MuiListItemIcon-root": {
        color: "var(--blue-grey)",
      },
      "&.MuiListItem-gutters": {
        paddingRight: 0,
      },
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "var(--white)",
        "& .MuiListItemIcon-root": {
          color: "var(--white)",
        },
      },
    },
    listItemIcon: {
      minWidth: theme.spacing(4),
    },
    listIcon: {
      fontSize: theme.spacing(3),
    },
    listText: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        1.8
      )}px Roboto, sans-serif `,
    },
    activeStyle: {
      "& .MuiListItem-root ": {
        backgroundColor: theme.palette.primary.main,
        color: "var(--white)",
      },
      "& .MuiListItemIcon-root": {
        color: "var(--white)",
      },
    },
  })
);

function Sidebar() {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className={classes.sidebarRoot}>
        <div>
          <NavLink to="/users">
            <div className={classes.logoAndCompany}>
              <div className={classes.imgDiv}>
                {/* <img
            className={classes.img}
            src={localImages.LOGO}
            alt="company logo"
          /> */}
                <AppleIcon className={classes.img} />
              </div>
              <Typography className={classes.companyHeading} variant="h5">
                Company
              </Typography>
            </div>
          </NavLink>
          <div className={classes.listDiv}>
            <List component="nav">
              <NavLink to="/users" activeClassName={classes.activeStyle}>
                <ListItem button className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <PersonIcon className={classes.listIcon} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body1" className={classes.listText}>
                      Users
                    </Typography>
                  </ListItemText>
                </ListItem>
              </NavLink>
              <NavLink to="/categories" activeClassName={classes.activeStyle}>
                <ListItem button className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <CategoryIcon className={classes.listIcon} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body1" className={classes.listText}>
                      Categories
                    </Typography>
                  </ListItemText>
                </ListItem>
              </NavLink>
              <NavLink to="/companies" activeClassName={classes.activeStyle}>
                <ListItem button className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <LocationCityIcon className={classes.listIcon} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body1" className={classes.listText}>
                      Companies
                    </Typography>
                  </ListItemText>
                </ListItem>
              </NavLink>
              <NavLink to="/loanRequest" activeClassName={classes.activeStyle}>
                <ListItem button className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <LocalAtmIcon className={classes.listIcon} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body1" className={classes.listText}>
                      Loan Request
                    </Typography>
                  </ListItemText>
                </ListItem>
              </NavLink>
              <NavLink to="/chatSupport" activeClassName={classes.activeStyle}>
                <ListItem button className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <ChatIcon className={classes.listIcon} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body1" className={classes.listText}>
                      Chat Support
                    </Typography>
                  </ListItemText>
                </ListItem>
              </NavLink>
              <NavLink to="/notification" activeClassName={classes.activeStyle}>
                <ListItem button className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <NotificationsActiveIcon className={classes.listIcon} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body1" className={classes.listText}>
                      Notification
                    </Typography>
                  </ListItemText>
                </ListItem>
              </NavLink>
              <ListItem
                button
                className={classes.listItem}
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <ListItemIcon className={classes.listItemIcon}>
                  <ExitToAppIcon className={classes.listIcon} />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body1" className={classes.listText}>
                    Logout
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </div>
      </div>
      <MainModal open={openModal} handleClose={handleClose}>
        <Logout handleClose={handleClose} />
      </MainModal>
    </>
  );
}

export default Sidebar;

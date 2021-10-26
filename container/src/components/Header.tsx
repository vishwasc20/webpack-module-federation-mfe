import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  searchBtn: {
    display: 'flex',
    padding: '0.5rem'
  },
  logo: {
    width: '5rem'
  }
}));

export default function Header({ signedIn, onSignOut }: {signedIn: boolean, onSignOut?: Function}) {
  const classes = useStyles();

  const onClick = () => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <img className={classes.logo} src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Tesco_Logo.svg/2560px-Tesco_Logo.svg.png"></img>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
          >
            Admin UI
          </Typography>
          <div style={{display: 'flex'}}>
            <div>
              <TextField id="outlined-basic" label="Search" variant="outlined" />
            </div>
            <div className={classes.searchBtn}>
              <Button variant="contained" color="primary">
                GO
              </Button>
            </div>
          </div>
          {/* <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            component={RouterLink}
            to={signedIn ? '/' : '/auth/signin'}
            onClick={onClick}
          >
            {signedIn ? 'Logout' : 'Login'}
          </Button> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

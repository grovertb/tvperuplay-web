import React from 'react';

import { Container, Typography, AppBar, Toolbar, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import constants from './utils/constants';

const useStyles = makeStyles({
  "@global": {
    'body, #root': {
      overflow: 'hidden'
    }
  },
  appBar: {
    backgroundColor: 'transparent'
  },
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%'
  },
  containerApp: {
    flex: 1,
    minHeight: '100vh',
    paddingTop: 100
  },
  contentApp:{
    background: `url(${require('./resources/banner-bg.png')}) no-repeat`,
    backgroundSize: 'cover',
  },
  flexContent: {
    display: 'flex',
    flexDirection: 'column',
    textAlign : 'center'
  },
  flexHeight: {
    '& > div' :{
      display: 'flex',
      justifyContent: 'center'
    },
    flex: 1
  },
  googlePlay: {
    '@media (max-width: 768px)': {
      height: 80
    },
    height: 110
  },
  header: {
    width: '100%',
  },
  icon: {
    maxHeight: 64
  },
  phone: {
    maxHeight: '80vh',
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBotton: 12,
    marginLeft: 8
  },
  titleContent: {
    '@media (max-width: 768px)': {
      fontSize: '1.1rem',
    },
    color: 'white',
    fontSize: '2.2rem',
    fontWeight: 500
  },
  toolbar: {
    '@media (max-width: 768px)': {
      justifyContent: 'center'
    },
    alignItems: 'center',
    display: 'flex',
    paddingBottom: 8,
    paddingTop: 8
  }
}, { name: 'GroverApp'})

function App() {
  const classes = useStyles()
  
  return (
    <React.Fragment>
      <AppBar position='fixed' className={classes.appBar} elevation={0}>
        <Container maxWidth='lg'>
          <Toolbar className={classes.toolbar}>
            <img alt={constants.nameApp} className={classes.icon} src={require('./resources/icon.png')} />
            <Typography className={classes.titleApp}>{constants.nameApp}</Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.contentApp}>
        <Container className={classes.containerApp}>
          <Grid container className={classes.flexHeight}>
            <Grid item xs={12} md={7} alignItems='center'>
              <div className={classes.flexContent}>
                <Typography variant='inherit' className={classes.titleContent}>
                  {/* Disfruta de TV desde tu celular */}
                  Disfruta la experiencia de ver tv en vivo desde tu smartphone ó tablet.
                </Typography>
                <a href='https://play.google.com/store/apps/details?id=io.github.grovertb.tvperuplayv2' target='_blank' rel="noopener noreferrer">
                  <img alt='Disponible en Google Play' className={classes.googlePlay} src='https://play.google.com/intl/es-419/badges/static/images/badges/es-419_badge_web_generic.png'/>
                </a>
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
                {/* <div>App</div> */}
              <img className={classes.phone} alt={constants.nameApp} src={require('./resources/iphone_hand.png')} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App

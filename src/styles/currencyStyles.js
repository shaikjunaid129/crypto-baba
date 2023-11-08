/**@type {import { "@mui/material" }.SxProps<Theme>} */

const currencyStyles = (theme) => ({
  heading: {
    margin: '20px',
    fontFamily: 'Montserrat',
    color: 'primary.custom',
  },
  searchBox: {
    marginBottom: '20px',
    input: { color: 'primary.text', backgroundColor: 'primary.custom' },
  },
  bodyRow: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'primary.main',
    borderBottom: '1px solid white',
    cursor: 'pointer',
    overflow: 'auto',
    '&:hover': {
      backgroundColor: 'primary.custom',
    },
  },
  shortName: {
    textTransform: 'uppercase',
    fontSize: '22px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
    },
  },
  currencyName: {
    fontSize: '22px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
      borderBottom: 'none',
    },
  },
  price: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '22px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
      borderBottom: 'none',
    },
  },
  coinInfoBox: {
    display: 'flex',
    width: '100%',
    padding: '40px 20px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '20px 10px',
    },
  },
  imageBox: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      paddingBottom: '20px',
    },
  },

  img: {
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: '100px',
    },
  },
  coinBox: {
    width: '50%',
    paddingRight: '20px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingRight: '0px',
    },
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
  coinName: {
    color: 'primary.custom',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '10px',
    },
  },
  coinDescription: {
    color: 'primary.custom',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '10px',
    },
  },
});

export default currencyStyles;

/**@type {import { "@mui/material" }.SxProps<Theme>} */

const newsStyles = (theme) => ({
  newsContainer: {
    backgroundColor: theme.palette.primary.main,
  },
  menuItemContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '50%',
  },
  menuItem: {
    color: theme.palette.text.primary,
  },
});

export default newsStyles;

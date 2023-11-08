import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Brightness4,
  Brightness7,
  Clear, // Import the Clear icon
} from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import { lightTheme, darkTheme } from '../../theme';
import navbarStyles from '../../styles/navbarStyles';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const currentTheme = darkMode ? darkTheme : lightTheme;
  const isMobile = useMediaQuery('(max-width:960px)');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar position="sticky" sx={navbarStyles(currentTheme).navbarContainer}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            {isMobile ? <MenuIcon /> : ''}
          </IconButton>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{ flex: 1, textDecoration: 'none', color: 'primary.text' }}
          >
            Crypto Baba
          </Typography>
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {currentTheme.type === 'dark' ? (
              <Brightness7 style={{ color: currentTheme.palette.icon.main }} />
            ) : (
              <Brightness4 style={{ color: currentTheme.palette.icon.main }} />
            )}
          </IconButton>
          {isMobile ? (
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  height: '100%',
                  width: '100%',
                  maxHeight: '100%',
                  maxWidth: '100%',
                  left: '0px',
                  position: 'unset',
                  backgroundColor: currentTheme.palette.secondary.main,
                },
              }}
            >
              {/* Close button at the top right corner */}
              <IconButton
                style={{ position: 'absolute', top: '0', right: '0' }}
                onClick={handleMenuClose}
              >
                <Clear />
              </IconButton>
              <Box
                sx={{
                  paddingTop: '66%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <MenuItem onClick={handleMenuClose}>
                  <Typography
                    component={Link}
                    to="/coins"
                    style={{
                      color: currentTheme.palette.primary.text,
                      textDecoration: 'none',
                      padding: '1rem',
                    }}
                  >
                    Currency
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleMenuClose}>
                  <Typography
                    component={Link}
                    to="/"
                    style={{
                      color: currentTheme.palette.primary.text,
                      textDecoration: 'none',
                      padding: '1rem',
                    }}
                  >
                    News
                  </Typography>
                </MenuItem>
              </Box>
            </Menu>
          ) : (
            <>
              <Typography
                component={Link}
                variant="h6"
                to="/coins"
                sx={{ padding: '0rem 1rem', textDecoration: 'none' }}
              >
                Currency
              </Typography>
              <Typography
                sx={{ padding: '0rem 1rem', textDecoration: 'none' }}
                variant="h6"
                component={Link}
                to="/"
              >
                News
              </Typography>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

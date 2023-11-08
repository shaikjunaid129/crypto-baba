import { Box, Typography } from '@mui/material';
import Carousel from './Carousel';

function Banner() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url(../src/assets/banner.jpg)',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            height: 400,
            display: 'flex',
            flexDirection: 'column',
            // paddingTop: 25,
            justifyContent: 'space-around',
          }}
        >
          <Box
            sx={{
              display: 'flex',

              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                color: 'primary.custom',
                fontSize: '25px',
                // fontFamily: 'Montserrat',
              }}
            >
              Trending Coins
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                textTransform: 'capitalize',
                fontFamily: 'Montserrat',
                color: 'primary.custom',
              }}
            >
              A place where you find all the Crypto stuff
            </Typography>
          </Box>
          <Carousel />
        </Box>
      </Box>
    </>
  );
}

export default Banner;

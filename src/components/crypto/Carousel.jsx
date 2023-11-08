import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

function Carousel() {
  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h'
    );

    console.log(data);
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <Link
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          textTransform: 'uppercase',
          textDecoration: 'none',
          color: 'white',
          marginRight: '10px',
          width: 'fit-content',
        }}
        to={`/coins/${coin.id}`}
      >
        <Box
          component="img"
          src={coin?.image}
          alt={coin.name}
          height="80"
          sx={{ marginBottom: '0px', height: '100px', objectFit: 'contain' }}
        />
        <Typography sx={{ color: 'white' }}>
          {coin?.symbol.toUpperCase()}
        </Typography>
        <Typography
          style={{
            color: profit > 0 ? 'rgb(14, 203, 129)' : 'red',
            fontWeight: 500,
          }}
        >
          {profit && '+'}
          {coin?.price_change_percentage_24h?.toFixed(2)}%
        </Typography>
        <Typography style={{ fontSize: 22, fontWeight: 500, color: 'white' }}>
          ₹ {coin?.current_price.toFixed(2)}
        </Typography>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 3, // Show 3 cards on mobile
    },
    1024: {
      items: 5, // Show 5 cards on desktop (adjust the width as needed)
    },
  };

  return (
    <Box
      sx={{
        height: '50%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        // li: { width: '100% !important' },
        '& .alice-carousel__stage': {
          display: 'flex',
        },
      }}
    >
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={2000}
        animationDuration={2000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        keyboardNavigation={true}
        autoPlay
      />
    </Box>
  );
}

export default Carousel;

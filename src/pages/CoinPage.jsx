import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import data from './data.json';
import currencyStyles from '../styles/currencyStyles';
import { Box, Typography, useTheme } from '@mui/material';
import CoinInfo from '../components/crypto/CoinInfo';
import { numberWithCommas } from '../utils/common';
import ReactHtmlParser from 'react-html-parser';

function CoinPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  //   console.log(coin);
  const currentTheme = useTheme();

  const fetchCoin = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );

    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box sx={currencyStyles(currentTheme).coinInfoBox}>
      <Box sx={currencyStyles(currentTheme).imageBox}>
        <Box
          component="img"
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          sx={currencyStyles(currentTheme).img}
        />
        <Typography sx={currencyStyles(currentTheme).coinName} variant="h3">
          {coin?.name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={currencyStyles(currentTheme).coinDescription}
        >
          {ReactHtmlParser(coin?.description.en.split('. ')[0])}.
        </Typography>
        <Box>
          <span style={{ display: 'flex' }}>
            <Typography sx={{ color: 'primary.custom' }} variant="h5">
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              sx={{
                color: 'primary.custom',
              }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: 'flex' }}>
            <Typography sx={{ color: 'primary.custom' }} variant="h5">
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" sx={{ color: 'primary.custom' }}>
              ₹{' '}
              {numberWithCommas(coin?.market_data.current_price.inr.toFixed(2))}
            </Typography>
          </span>
          <span style={{ display: 'flex' }}>
            <Typography sx={{ color: 'primary.custom' }} variant="h5">
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" sx={{ color: 'primary.custom' }}>
              ₹ {numberWithCommas(coin?.market_data.market_cap.inr.toFixed())}M
            </Typography>
          </span>
        </Box>
      </Box>
      <CoinInfo coin={coin} />
    </Box>
  );
}

export default CoinPage;

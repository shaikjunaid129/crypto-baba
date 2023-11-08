import { Box, Typography, useTheme, CircularProgress } from '@mui/material';
import newsStyles from '../../styles/newsStyles';
import NewsCard from './NewsCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function News() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=crypto&apiKey=73cfb40b198e46e9943d950b5efa3d76'
      )
      .then((response) => {
        setNews(response.data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const currentTheme = useTheme();
  return (
    <Box sx={newsStyles(currentTheme).navbarContainer}>
      <Typography
        variant="h4"
        sx={{
          color: 'primary.text',
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          fontWeight: 'lighter',
        }}
      >
        Crypto News
      </Typography>

      {isLoading && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      )}

      {error && (
        <Typography variant="h6" sx={{ color: 'error.main' }}>
          Error: {error.message}
        </Typography>
      )}

      {!isLoading && !error && (
        <>
          <Typography
            sx={{
              padding: '0px 20px',
              textAlign: 'justify',
              color: 'primary.text',
            }}
          >
            At Crypto Baba, we understand the vital role cryptocurrency plays in
            today's rapidly changing financial landscape. Our platform is your
            one-stop destination for all your cryptocurrency news needs. Whether
            you're looking for the latest price movements, in-depth analysis of
            blockchain projects, regulatory updates, or insights into the
            ever-expanding world of decentralized finance (DeFi), you can trust
            us to keep you informed. With our comprehensive coverage, you can
            rest assured that all the required crypto news can be found right
            here. Stay ahead of the curve and make informed decisions in the
            exciting world of digital assets with Crypto Chronicles.
          </Typography>
          <NewsCard articles={news} isLoading={isLoading} />
        </>
      )}
    </Box>
  );
}

export default News;

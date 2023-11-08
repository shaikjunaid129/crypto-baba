import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Input } from '@mui/material';
import Grid from '@mui/material/Grid';

function NewsCard({ articles, isLoading }) {
  const [searchText, setSearchText] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(articles);

  console.log({ filteredArticles });
  // Function to filter articles based on the search text
  const handleSearch = () => {
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  // Function to reset the search results
  const resetSearch = () => {
    setSearchText('');
    setFilteredArticles(articles);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center" p={2}>
        <Input
          placeholder="Search"
          value={searchText}
          sx={{ backgroundColor: 'primary.main', marginRight: '10px' }}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          sx={{ marginRight: '5px' }}
        >
          Search
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={resetSearch}
          sx={{ marginRight: '5px' }}
        >
          Reset
        </Button>
      </Box>
      {isLoading ? (
        'Loading....'
      ) : filteredArticles.length === 0 ? (
        <Typography
          variant="h6"
          sx={{ textAlign: 'center', color: 'primary.text' }}
        >
          No results found
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {filteredArticles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  margin: '10px',
                  backgroundColor: 'primary.main',
                  boxShadow:
                    'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={article.urlToImage}
                    alt={article.title}
                  />
                  <CardContent
                    sx={{
                      flex: '1',
                      overflow: 'hidden',
                      maxHeight: '100%',
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="primary.text"
                    >
                      {article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary.text"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3, // Show up to 3 lines before ellipsis
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {article.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    href={article.url}
                    size="small"
                    color="secondary"
                    variant="contained"
                  >
                    Read more...
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default NewsCard;

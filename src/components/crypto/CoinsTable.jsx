import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  LinearProgress,
  Pagination,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { numberWithCommas } from '../../utils/common';
import currencyStyles from '../../styles/currencyStyles.js';

function CoinsTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const currentTheme = useTheme();

  const navigate = useNavigate();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    );

    setCoins(data);
    setLoading(false);
  };

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Typography variant="h4" sx={currencyStyles(currentTheme).heading}>
        Cryptocurrency Prices by Market Cap
      </Typography>
      <TextField
        label="Search"
        variant="outlined"
        sx={currencyStyles(currentTheme).searchBox}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableContainer>
        {loading ? (
          <LinearProgress sx={{ backgroundColor: 'primary.custom' }} />
        ) : (
          <Box>
            <TableHead
              sx={{ backgroundColor: 'primary.custom', display: 'block' }}
            >
              <TableRow
                sx={{ display: 'flex', justifyContent: 'space-around' }}
              >
                {['Coin', 'Price', '24h Change', 'Market Cap'].map((head) => (
                  <TableCell
                    sx={{
                      color: 'primary.text',
                      fontWeight: '700',
                      fontFamily: 'Montserrat',
                      textAlign:
                        head === 'Price' || head === 'Market Cap'
                          ? 'right'
                          : 'left',
                    }}
                    key={head}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={{ display: 'block' }}>
              {handleSearch()
                .slice((page - 1) * 10, (page - 1) * 10 + 10)
                .map((row) => {
                  const profit = row.price_change_percentage_24h > 0;
                  return (
                    <TableRow
                      onClick={() => navigate(`/coins/${row.id}`)}
                      sx={currencyStyles(currentTheme).bodyRow}
                      key={row.name}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          borderBottom: 'none',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Box
                          component="img"
                          src={row?.image}
                          alt={row.name}
                          sx={{
                            height: '50px',
                            width: '50px',
                            marginRight: '10px',
                          }}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <Typography
                            component="span"
                            sx={currencyStyles(currentTheme).shortName}
                          >
                            {row.symbol}
                          </Typography>
                          <Typography
                            component="span"
                            sx={currencyStyles(currentTheme).currencyName}
                          >
                            {row.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={currencyStyles(currentTheme).price}
                      >
                        ₹ {numberWithCommas(row.current_price.toFixed(2))}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{
                          color: profit > 0 ? 'rgb(14, 203, 129)' : 'red',
                        }}
                        sx={currencyStyles(currentTheme).price}
                      >
                        {profit && '+'}
                        {row.price_change_percentage_24h.toFixed(2)}%
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={currencyStyles(currentTheme).price}
                      >
                        ₹
                        {numberWithCommas(
                          row.market_cap.toString().slice(0, -6)
                        )}
                        M
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Box>
        )}
      </TableContainer>
      <Pagination
        count={Math.ceil(handleSearch().length / 10)}
        sx={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          '& .MuiPaginationItem-root': {
            color: 'primary.custom',
          },
        }}
        onChange={(_, value) => {
          setPage(value);
          window.scroll(0, 450);
        }}
      />
    </Container>
  );
}

export default CoinsTable;

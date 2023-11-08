import axios from 'axios';
import { useEffect, useState } from 'react';
import SelectButton from './SelectButton';
import { Box, CircularProgress, useTheme } from '@mui/material';
import { Line } from 'react-chartjs-2';

// Import the required Chart.js modules
import { Chart as ChartJS } from 'chart.js/auto';
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { chartDays } from '../../config/data';
import currencyStyles from '../../styles/currencyStyles';

// Register the required scales
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CoinInfo() {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const [flag, setFlag] = useState(false);

  const currentTheme = useTheme();
  const fetchHistoricData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=${days}`
    );
    setFlag(true);
    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  return (
    <Box sx={currencyStyles(currentTheme).coinBox}>
      {!historicData || !flag ? (
        <CircularProgress
          sx={{ color: 'primary.custom' }}
          size={250}
          thickness={1}
        />
      ) : (
        <>
          <Line
            data={{
              labels: historicData.map((coin) => {
                const date = new Date(coin[0]); // Fixed date extraction
                const formattedDate = `${date.getDate()} ${date.toLocaleString(
                  'default',
                  { month: 'short' }
                )} ${date.getFullYear()}`;
                return days === 1 ? formattedDate : formattedDate;
              }),
              datasets: [
                {
                  data: historicData.map((coin) => coin[1]),
                  label: `Price (Past ${days} Days) in INR`,
                  borderColor: '#0ca999',
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
              scales: {
                x: {
                  type: 'category',
                },
              },
            }}
          />

          <Box
            sx={{
              display: 'flex',
              marginTop: '20px',
              justifyContent: 'space-around',
              width: '100%',
            }}
          >
            {chartDays.map((day) => (
              <SelectButton
                key={day.value}
                onClick={() => {
                  setDays(day.value);
                  setFlag(false);
                }}
                selected={day.value === days}
              >
                {day.label}
              </SelectButton>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}

export default CoinInfo;

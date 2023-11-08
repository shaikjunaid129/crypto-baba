import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import CurrencyPage from './pages/CurrencyPage';
import NewsPage from './pages/NewsPage';
import Navbar from './components/Navbar/Navbar';
import { lightTheme, darkTheme } from './theme.js'; // Import your custom themes
import { useState } from 'react';
import CoinPage from './pages/CoinPage.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Use the selected theme based on the darkMode state

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/coins" element={<CurrencyPage />} />
          <Route path="/" element={<NewsPage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

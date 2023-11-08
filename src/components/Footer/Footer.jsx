import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Box } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.custom',
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="primary.text" align="center">
          {'Copyright © '}
          Junaid Shaik {'  '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
}

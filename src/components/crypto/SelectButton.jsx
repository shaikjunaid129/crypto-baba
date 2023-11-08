import { Typography } from '@mui/material';

const SelectButton = ({ children, selected, onClick }) => {
  return (
    <Typography
      component="span"
      onClick={onClick}
      sx={{
        border: '1px solid primary.custom',
        borderRadius: '5px',
        padding: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
        fontFamily: 'Montserrat',
        cursor: 'pointer',
        backgroundColor: selected ? 'primary.custom' : 'primary.main',
        color: selected ? 'primary.text' : '',
        fontWeight: selected ? 700 : 500,
        '&:hover': {
          backgroundColor: 'primary.custom',
          color: 'primary.custom',
        },
        width: '22%',
        //   margin: 5,
      }}
    >
      {children}
    </Typography>
  );
};

export default SelectButton;

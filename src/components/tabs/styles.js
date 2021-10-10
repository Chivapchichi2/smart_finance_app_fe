export const styles = {
  root: {
    display: 'none',
    border: '1px solid red',
    '@media screen and (min-width: 768px)': {
      display: 'block',
      width: 665,
    },
    '@media screen and (min-width: 1280px)': {
      width: 1060,
    },

    '& .PrivateTabIndicator-colorSecondary-8': {
      display: 'none',
    },

    '& .MuiButtonBase-root.MuiTab-root': {
      width: 138,
      height: 40,
      background: '#FAFBFD',
      padding: '0px 20px',
      borderRadius: '20px 20px 0px 0px',
      '& .MuiTab-wrapper': {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 14,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        color: '#000000',
        height: '40px',
      },
    },

    '& .MuiButtonBase-root.MuiTab-root.Mui-selected': {
      background: '#FEFEFE',

      '& .MuiTab-wrapper': {
        color: '#FF751D',
      },
    },

    '& .MuiTabPanel-root': {
      padding: '33px 20px 50px',
      backgroundColor: '#fff',
      borderRadius: '0px 30px 30px 30px',
      '@media screen and (min-width: 768px)': {
        padding: '28px 30px 50px',
      },
      '@media screen and (min-width: 1280px)': {
        padding: '33px 20px 50px',
      },
    },
  },
};

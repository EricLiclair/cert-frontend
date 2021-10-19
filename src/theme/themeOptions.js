import { createTheme } from '@mui/material/styles';

const themeOptions = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#000000',
            light: '#555555',
            dark: '#434343',
        },
        secondary: {
            main: '#ff9b21',
            light: '#ffcd86',
            dark: '#f4801c',
            contrastText: 'rgba(255,255,255,0.87)',
        },
    },
    typography: {
        fontFamily: 'Poppins',
    },
    shape: {
        borderRadius: 0,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    border: 0,
                    borderRadius: 0,
                    height: 56,
                    margin: "0 1rem",
                },
            },
        },
    },
});

export default themeOptions;
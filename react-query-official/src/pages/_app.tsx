import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Box, createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import GlobalLoadingIndicator from 'components/GlobalLoadingIndicator';
import SideBar from 'components/SideBar';
import type {AppProps} from 'next/app';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1800,
    },
  },
});

const queryClient = new QueryClient();

const links = [
  'queries',
  'parallel-queries',
  'dependent-queries',
  'query-retry',
  'keep-previous-data',
  'infinite-queries',
  'mutations',
];

function MyApp({Component, pageProps}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{display: 'flex'}}>
          <SideBar links={links} />
          <GlobalLoadingIndicator />
          <Box component="main" sx={{flexGrow: 1}}>
            <Component {...pageProps} />
          </Box>
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

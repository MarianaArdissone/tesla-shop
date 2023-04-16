import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { SWRConfig } from 'swr';

import { lightTheme } from '../../themes';
import { CartProvider, UiProvider } from '../../context';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: ( resource, init ) => fetch(resource, init).then(res => res.json())
      }}
    >
      <CartProvider>
        <UiProvider>
          <ThemeProvider theme={ lightTheme }>
            <CssBaseline/>
            <Component {...pageProps} />
          </ThemeProvider>
        </UiProvider>
      </CartProvider>
    </SWRConfig>
  )
}

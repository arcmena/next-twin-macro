import React from 'react'
import { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'
import { ThemeProvider } from 'styled-components'

// Components
import DefaultLayout from '../components/layouts/DefaultLayout'

import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <DefaultLayout>
                <Component {...pageProps} />
            </DefaultLayout>
        </ThemeProvider>
    )
}

export default MyApp

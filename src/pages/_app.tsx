import React from 'react'
import { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'
import DefaultLayout from '../components/layouts/DefaultLayout'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <GlobalStyles />
            <DefaultLayout>
                <Component {...pageProps} />
            </DefaultLayout>
        </>
    )
}

export default MyApp

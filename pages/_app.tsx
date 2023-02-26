import '@/styles/globals.scss'
import { useRef } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Work_Sans } from '@next/font/google'
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";

const workSans = Work_Sans({ subsets: ['latin'], display: 'swap' });


export default function App({ Component, pageProps }: AppProps) {
    const queryClient = useRef(new QueryClient());

    return (
        <QueryClientProvider client={queryClient.current}>
            <Hydrate state={pageProps.queryDehydratedState}>
                <style jsx global>
                    {`
                        html {
                            font-family: ${workSans.style.fontFamily};
                        }
                    `}
                </style>
                <Head>
                    <title>Lendsqr</title>
                    <meta name="description" content="Lendsqr front end assessment" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Component {...pageProps} />
            </Hydrate>
        </QueryClientProvider>
    )

}

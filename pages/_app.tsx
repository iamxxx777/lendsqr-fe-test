import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Work_Sans } from '@next/font/google'

const workSans = Work_Sans({ subsets: ['latin'], display: 'swap' })


export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>
                {`
                html {
                    font-family: ${workSans.style.fontFamily};
                }
            `}
            </style>
            <Component {...pageProps} />
        </>
    )

}

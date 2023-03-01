import 'focus-visible'
import type { AppProps } from 'next/app'
import './_app.css'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

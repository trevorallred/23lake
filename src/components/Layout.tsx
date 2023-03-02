import Head from 'next/head'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export function Layout({ children }: Props): JSX.Element {
  return (
    <div className="h-full w-full">
      <Head>
        <title>23 Lake Rd, Irvine, CA</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      {children}
    </div>
  )
}

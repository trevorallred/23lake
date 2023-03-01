import Head from 'next/head'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  title?: string
  user?: any
  loading?: boolean
}

export function Layout({ children, user, loading = false, title = '23 Lake Rd, Irvine, CA' }: Props): JSX.Element {
  return (
    <div className="h-full w-full">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />{' '}
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      {children}
    </div>
  )
}

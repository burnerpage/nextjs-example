import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://admin.burner.page/js/<your_team_hash_here>"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

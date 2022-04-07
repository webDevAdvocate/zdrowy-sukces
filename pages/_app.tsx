import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Head>
      <title>Zdrowy Sukces Patrycja Marszalec - dietetyk online</title>
      <meta name="description" content="Przyjemna dieta, to taka która będziesz chciał kontynuować przez całe życie. W diecie ode mnie nie zabronię Ci jeść słodyczy ani pizzy." />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#c55b71" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="google-site-verification"
        content="_9ZvToYm83a1fa2AETj63b9XcKP4hsGvddoGSp-9lQA"
      />
      <meta
        property="og:title"
        content="Zdrowy Sukces Patrycja Marszalec - dietetyk online"
      />
      <meta
        property="og:site_name"
        content="Zdrowy Sukces Patrycja Marszalec - dietetyk online"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://zdrowy-sukces.pl" />
      <meta
        property="og:description"
        content="Przyjemna dieta, to taka która będziesz chciał kontynuować przez całe życie. W diecie ode mnie nie zabronię Ci jeść słodyczy ani pizzy."
      />

      <meta
        property="og:image"
        content="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/p320x320/97085849_166838288102412_4308183627571348059_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=0D-TleeJAGgAX-bf_HX&oh=d04d711ac76af63c620fc188c2da7d4a&oe=5EFB80CE"
      />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#c55b71" />
      <script src="/mailerlite.js" />
    </Head>
    <Component {...pageProps} />
  </div>
}

export default MyApp

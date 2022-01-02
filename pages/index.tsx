import type { NextPage } from 'next'
import Head from 'next/head'
import { About } from '../src/components/about/about'
import { Certificates } from '../src/components/certificates/certificates'
import { Concerns } from '../src/components/concerns/concerns'
import { ContactSection } from '../src/components/contactSection/contactSection'
import { Cooperation } from '../src/components/cooperation/cooperation'
import { Footer } from '../src/components/footer/footer'
import { Hello } from '../src/components/hello/hello'
import { Prices } from '../src/components/prices/prices'
import { Header } from '../src/components/header/header';
import { EffectiveDietSection } from '../src/components/effectiveDietSection/effectiveDietSection'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zdrowy Sukces</title>
        <meta name="description" content="Zdrowy sukces" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hello />
      <EffectiveDietSection />
      <ContactSection />
      <Cooperation />
      <About />
      <Concerns />
      <Prices />
      <Certificates />
      <Footer />
    </div>
  )
}

export default Home
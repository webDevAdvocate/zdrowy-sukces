import type { NextPage } from 'next'
import Head from 'next/head'
import { ContactSection } from '../src/components/contactSection/contactSection'
import { Hello } from '../src/components/hello/hello'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zdrowy Sukces</title>
        <meta name="description" content="Zdrowy sukces" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hello />
      <ContactSection /> 

     
    </div>
  )
}

export default Home

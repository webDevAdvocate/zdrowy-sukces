import type { NextPage } from 'next'
import Head from 'next/head'
import { About } from '../src/components/about/about'
import { Certificates } from '../src/components/certificates/certificates'
import { Concerns } from '../src/components/concerns/concerns'
import { ContactSection } from '../src/components/contactSection/contactSection'
import { Cooperation } from '../src/components/cooperation/cooperation'
import { Footer } from '../src/components/footer/footer'
import { Hello } from '../src/components/hello/hello'
import { Posts } from '../src/components/instagram/instagram'
import { Prices } from '../src/components/prices/prices'

import styles from '../styles/Home.module.css'

const Home: NextPage<{ posts: Posts }> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zdrowy Sukces</title>
        <meta name="description" content="Zdrowy sukces" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hello />
      <ContactSection posts={posts} />
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


export async function getStaticProps() {
  return {
    props: {
      posts: [
        { image: process.env.INSTAGRAM_FIRST_POST_IMAGE, title: process.env.INSTAGRAM_FIRST_POST_TITLE, url: process.env.INSTAGRAM_FIRST_POST_URL },
        { image: process.env.INSTAGRAM_SECOND_POST_IMAGE, title: process.env.INSTAGRAM_SECOND_POST_TITLE, url: process.env.INSTAGRAM_SECOND_POST_URL }
      ]
    },
    revalidate: 60
  }
}
import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../src/components/footer/footer'
import { Posts } from '../src/components/instagram/instagram'
import { Header } from '../src/components/header/header';
import { EffectiveDietLanding } from '../src/components/effectiveDietLanding/effectiveDietLanding';

import styles from '../styles/Home.module.css'


const EffectiveDiet: NextPage<{ posts: Posts }> = ({ posts }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Zdrowy Sukces</title>
                <meta name="description" content="Zdrowy sukces" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <EffectiveDietLanding />
            <Footer />
        </div>
    )
}

export default EffectiveDiet
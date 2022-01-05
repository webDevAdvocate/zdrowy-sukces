import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../src/components/footer/footer'
import { Header } from '../src/components/header/header';
import { EffectiveDietLanding } from '../src/components/effectiveDietLanding/effectiveDietLanding';

import styles from '../styles/Home.module.css'
import { Cookies } from '../src/components/cookies/cookies';


const EffectiveDiet: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Zdrowy Sukces</title>
                <meta name="description" content="Zdrowy sukces" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header pink />
            <EffectiveDietLanding />
            <Footer />
            <Cookies />
        </div>
    )
}

export default EffectiveDiet
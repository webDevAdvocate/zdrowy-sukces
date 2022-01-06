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
                <title>Skuteczna dieta - sprawdź 4 wersje e-booka</title>
                <meta name="description" content="Przed Tobą 4 wersje ebooka: Ebook 1600 kcal i 1800 kcal z dietą klasyczną, ebook 1600 kcal i 1800 kcal z dietą przeciwzapalną. Posiłki w każdej wersji możesz wymieniać pomiędzy sobą dowolnie." />
            </Head>
            <Header pink />
            <EffectiveDietLanding />
            <Footer />
            <Cookies />
        </div>
    )
}

export default EffectiveDiet
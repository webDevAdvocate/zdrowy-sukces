import Link from 'next/link';
import background from '../../assets/images/ebooki.png';

import styles from './effectiveDietSection.module.scss';

export const EffectiveDietSection = () => {

    return <section className={styles.section}>
        <Link href="https://zdrowysukceskoszkk.v.1cart.eu/pl/offer">
            <img className={styles.image} alt="skuteczna dieta" width="100vw" height="auto" src={background.src}></img>
        </Link>
        <button className={styles.button}>
            <Link href="https://zdrowysukceskoszkk.v.1cart.eu/pl/offer">
                Sprawdź
            </Link>
        </button>
    </section>
}
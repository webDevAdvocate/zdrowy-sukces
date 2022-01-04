import Link from 'next/link';
import background from '../../assets/images/effective_diet_section_mobile.png';

import styles from './effectiveDietSection.module.scss';

export const EffectiveDietSection = () => {

    return <section className={styles.section}>
        <Link href="/skuteczna-dieta">
            <img className={styles.image} alt="skuteczna dieta" width="100vw" height="auto" src={background.src}></img>
        </Link>
        <button className={styles.button}>
            <Link href="/skuteczna-dieta">
                Sprawdź
            </Link>
        </button>
    </section>
}
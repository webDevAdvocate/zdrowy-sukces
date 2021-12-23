import Image from 'next/image';
import styles from './prices.module.scss';

import fork from '../../assets/images/sztuczce.png';

export const Prices = () => {

    return <section className={styles.prices}>
        <div className={styles.wrapper}>
            <div className={styles.fork}>
                <Image layout="responsive" src={fork} />
            </div>
            <h1>Cennik</h1>
            <hr />
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
            <div className={styles['prices-box']}>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
            </div>
        </div>
    </section>
}
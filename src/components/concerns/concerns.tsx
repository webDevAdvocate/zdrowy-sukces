import Image from 'next/image';
import styles from './concerns.module.scss';
import cx from 'classnames';

import wage from '../../assets/images/waga.png';

export const Concerns = () => {

    return <section className={styles.concerns}>
        <h1>
            Jakie problemy pomagam rozwiązać?
        </h1>
        <div className={styles.content}>
            <div className={styles.boxes}>
                <div className={cx(styles.box, styles.center)}>
                    <div className={styles.wage}>
                        <Image layout="responsive" src={wage} />
                    </div>
                </div>
                <div className={styles.box}>
                    <h3>Endometrioza</h3>
                    <h3>PCOS</h3>
                    <h3>FHA</h3>
                    <h3>Brak owulacji</h3>
                    <h3>Niepłodność</h3>
                    <h3>Uporczywy PMS</h3>
                    <h3>Bolesne miesiączki</h3>
                </div>
                <div className={cx(styles.box, styles.color)}>
                    <h3>Insulinooporność</h3>
                    <h3>Hiperinsulinemia</h3>
                    <h3>Hiperandrogenizm</h3>
                    <h3>Hiperprolaktynemia</h3>
                    <h3>Hashimoto</h3>
                    <h3>Niedoczynność tarczycy</h3>
                    <h3>Nadczynność tarczycy</h3>
                </div>
                <div className={styles.box}>
                    <h3>Dieta w ciąży</h3>
                    <h3>Migreny</h3>
                    <h3>Trądzik</h3>
                    <h3>Wypadanie włosów</h3>
                    <h3>Nadwaga</h3>
                    <h3>Otyłość</h3>
                    <h3>Inne</h3>
                </div>
            </div>
        </div>
        <hr />
    </section>
}
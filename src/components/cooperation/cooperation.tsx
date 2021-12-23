import Image from 'next/image';

import styles from './cooperation.module.scss';
import img from '../../assets/images/wspolpraca.png';


export const Cooperation = () => {
    return <section className={styles.cooperation}>
        <div className={styles.headline}>
            <div className={styles.wrapper}>
                <div>
                    <h1 className={styles.text}>Jak wygląda współpraca?</h1>
                    <hr />
                </div>
                <div className={styles['img-wrapper']}>
                    <Image layout="responsive" className={styles.img} src={img} />
                </div>
            </div>
        </div>
        <div className={styles.content}>
            <ul className={styles.list}>
                <li className={styles.item}>Napisz do mnie wiadomość e-mail lub wiadomość prywatną na Instagramie</li>
                <li className={styles.item}>Wybierz opcję współpracy</li>
                <li className={styles.item}>Uzupełnij kwestionariusz zdrowotno-żywieniowy</li>
                <li className={styles.item}>Prześlij potrzebne wyniki badań</li>
                <li className={styles.item}>Dokonaj płatności i czekaj cierpliwie na jadłospis lub konsultację</li>
            </ul>
        </div>
    </section>
}
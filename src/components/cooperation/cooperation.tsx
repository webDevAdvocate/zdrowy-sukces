import Image from 'next/image';

import styles from './cooperation.module.scss';
import img from '../../assets/images/wspolpraca.png';


export const Cooperation = () => {
    return <section id="wspolpraca" className={styles.cooperation}>
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
                <li className={styles.item}>Wykup konsultację lub współpracę dietetyczną</li>
                <li className={styles.item}>Wypełnij przesłany kwestionariusz zdrowotno-żywieniowy (dostaniesz plik po opłaceniu współpracy)</li>
                <li className={styles.item}>Wykonaj potrzebna badania (dostaniesz plik po opłaceniu współpracy)</li>
                <li className={styles.item}>Prześlij kwestionariusz i badania na adres e-mail zdrowysukcesdietetyka@gmail.com</li>
                <li className={styles.item}>Czekaj cierpliwie na jadłospis lub konsultację</li>
            </ul>
        </div>
    </section>
}

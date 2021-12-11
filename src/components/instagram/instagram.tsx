import styles from './instagram.module.scss';
import instagram from '../../assets/images/ig_ikona.png';
import Image from 'next/image';

export const Instagram = () => {

    return <section className={styles.instagram}>
        <div className={styles.header}>
            <Image className={styles.icon} width={40} height={40} src={instagram} alt="instagram icon" />
            <h4>zobacz mój profil na instagramie</h4>
        </div>
        <hr />
        <div className={styles.posts}>
            <div className={styles.post}></div>
            <div className={styles.post}></div>
        </div>

    </section>
}
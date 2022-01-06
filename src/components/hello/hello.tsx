import Image from 'next/image';
import Link from 'next/link';

import styles from './hello.module.scss';
import parallelPhoto from '../../assets/images/parallel_photo.png';

const INSTAGRAM_URL = "https://www.instagram.com/zdrowy_sukces/";

export const Hello = () => {


    return <section className={styles.parallel}>
        <div className={styles.section}>
            <div className={styles.textBlock}>
                <div className={styles.text}>
                    <h1>Cześć, Tu Patrycja!</h1>
                    <h3>Pomagam kobietom zawalczyć o pewność siebie, uporać się z zaburzeniami hormonalnymi i pokochać gotowanie</h3>
                    <h5>Prowadzę instagrama o nazwie <strong><Link href={INSTAGRAM_URL}><strong>zdrowy_sukces</strong></Link></strong>, gdzie dzielę się wiedzą i przepisami na pyszne dania.</h5>
                </div>
            </div>
            <div className={styles.photoBlock}>
                <div className={styles.photo}>
                    <Image height={350} width={350} src={parallelPhoto} alt="Zdjęcie profilowe Patrycji" />
                </div>
            </div>
        </div>

    </section>
}
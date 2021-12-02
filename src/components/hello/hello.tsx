import Image from 'next/image';

import styles from './hello.module.scss';
import parallelPhoto from '../../assets/images/parallel_photo.png';

export const Hello = () => {


    return <section className={styles.parallel}>
        <div className={styles.section}>
            <div className={styles.textBlock}>
                <div className={styles.text}>
                    <h1>Cześć, Tu Patrycja!</h1>
                    <h3>Pomagam kobietom zawalczyć o pewność siebie, uporać się z zaburzeniami hormonalnymi i pokochać gotowania</h3>
                    <h5>Prowadzę instagrama o nazwie zdrowy_sukces, gdzie dzielę się wiedzą i pysznymi przepisami.</h5>
                </div>
            </div>
            <div className={styles.photoBlock}>
                <div className={styles.photo}>
                    <Image height={350} width={350}  src={parallelPhoto} alt="Zdjęcie profilowe Patrycji" />
                </div>
            </div>
        </div>
       
    </section>
}
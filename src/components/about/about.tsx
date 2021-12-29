import Image from 'next/image';

import styles from './about.module.scss';
import profile from '../../assets/images/about.png';
import heart from '../../assets/images/serce.png';


export const About = () => {
    return <section id="o-mnie" className={styles.about}>
        <div className={styles['heart-desktop']}>
            <Image layout="responsive" src={heart} />
        </div>
        <div className={styles.content}>
            <div className={styles['text-wrapper']}>
                <div className={styles.header}>
                    <div>
                        <h1>O mnie</h1>
                        <hr />
                    </div>
                    <div className={styles['heart-mobile']}>
                        <Image layout="responsive" src={heart} />
                    </div>
                </div>
                <div className={styles.text}>
                    Jestem magistrem dietetyki i pasjonatką pysznego jedzenia. Skończyłam studia na Wydziale Lekarskim Collegium Medicum Uniwersytetu Jagiellońskiego w Krakowie.
                    Uwielbiam pomagać innym osobom i sprawia mi to niezwykłą radość. Super czuję się w fotografii kulinarnej, a osobiście jestem estetką. Lubię, jak wszystko jest na swoim miejscu, lubię porządek i gdy to co mnie otacza jest spójne. Takie elementy mnie charakteryzują, więc możesz mieć pewność, że w jadłospisach także będzie wszystko jasne i dopracowane.
                    <br />
                    <div className={styles['desktop-text']}>
                        Interesują się głownie dietetyką hormonalną. Pomagam kobietom poczuć się lepiej w swoim ciele, uporać się z trądzikiem, bolesnymi miesiączkami, hiperandrogenizmem, hiperprolaktynemią oraz niepłodnością.
                        Kilka godzin w tygodniu spędzam w kuchni, gotując, piekąc, fotografując i jedząc same pyszności. <strong>Przepisy na te pyszności znajdziesz na moim Instagramie.</strong>
                        <br />
                        <br />
                        Gdy byłam nastolatką zmagałam się z nadwagą. Nie miałam pojęcia o racjonalnym odżywianiu, dlatego stosowałam głodówki oraz popularne diety z Internetu. Za każdym razem kończyło się to efektem jo-jo, ale mimo to wciąż w to brnęłam. Kiedy zaczęłam interesować się dietetyką, czytać i jeszcze przed studiami uczyć się w tym temacie, zrozumiałam, że żeby uporać się z nadwagą należy jeść wszystko na co ma się ochotę, ale należy mieć w tym umiar. Udało się, w końcu schudłam kilka kilogramów i masę ciała utrzymuję już kilka dobrych lat.
                    </div>
                </div>
            </div>
            <div className={styles.photo}>
                <div className={styles['profile-wrapper']}>
                    <Image layout="responsive" src={profile} />
                </div>
            </div>
        </div>
    </section>
}
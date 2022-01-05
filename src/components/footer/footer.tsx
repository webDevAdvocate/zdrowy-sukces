import Image from 'next/image';
import Link from 'next/link';

import styles from './footer.module.scss';
import logo from '../../assets/images/footer_logo.png';

export const Footer = () => {

    return <footer className={styles.footer}>
        <div className={styles.logo}>
            <Image layout="responsive" src={logo} />
        </div>
        <div className={styles.text}>Zdrowy Sukces | mgr Patrycja Marszalec</div>
        <div className={styles.privacy}>
            <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
        </div>
    </footer>
}
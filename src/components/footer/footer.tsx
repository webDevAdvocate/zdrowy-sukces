// import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './footer.module.scss';
import logo from '../../assets/images/footer_logo.png';

export const Footer = () => {

    // useEffect(() => {
    //     const loadDoctor = () => {
    //         var script = document.createElement("script");
    //         script.src = "https://platform.docplanner.com/js/widget.js";

    //         document.head.appendChild(script);
    //     };

    //     loadDoctor();
    // });

    return <footer className={styles.footer}>
        <div className={styles.logo}>
            <Image layout="responsive" src={logo} />
        </div>
        <div className={styles.text}>Zdrowy Sukces | mgr Patrycja Marszalec</div>
        {/* <div className={styles.doctor}>
            <div id="zl-widget-s" className={styles.doctorScript}>
                <a
                    id="zl-url"
                    className="zl-url"
                    href="https://www.znanylekarz.pl/patrycja-marszalec/dietetyk/krakow"
                    rel="nofollow"
                    data-zlw-doctor="patrycja-marszalec"
                    data-zlw-type="big"
                    data-zlw-opinion="true"
                    data-zlw-hide-branding="true"
                >
                    Patrycja Marszalec - ZnanyLekarz.pl
                </a>
            </div>
        </div> */}
        <div className={styles.privacy}>
            <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
        </div>
    </footer>
}
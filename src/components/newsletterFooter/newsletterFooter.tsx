import Image from 'next/image';

import styles from './newsletterFooter.module.scss';
import newsletter from '../../assets/images/newsletter.png';

export const NewsletterFooter = () => {
    return <section className={styles.section}>
        <div className={styles.left}>
            <Image className={styles.img} layout="responsive" src={newsletter} />
        </div>
        <div className={styles.right}>
            <div className="ml-form-embed"
                data-account="2068830:q7g6v0m4c5"
                data-form="5640757:p4k8d7">
            </div></div>
    </section>
}
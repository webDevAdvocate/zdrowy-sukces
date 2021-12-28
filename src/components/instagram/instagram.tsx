import styles from './instagram.module.scss';
import instagram from '../../assets/images/ig_ikona.png';
import Image from 'next/image';

interface Post {
    image?: string,
    title?: string,
    url?: string
}

export type Posts = Post[];

const DEFAULT_POST = {
    image: 'https://lh3.googleusercontent.com/hbmw7V6ULXAKLhPROGrheIbPDJzx9zoL_Ge_jgTnMH4gtjgtNNP4b9nv65vuQBd-jZ3lqufFwHLWw7j4YaheeywDvk0KLMKs-XbS1j2RoqEetH6Q--k7N5F8dwj8dtB8fMm9k2zcY1yH_xPRdweST4Dnfz7X2rwIsFwmRTN45QETVWYyDuqGeCwVcZwqNexBOIWSZPITQ12D8Il1hb1L73ElBxqsUXV63mxu1imtiTqLhPTCGcZgy18e_82tkgmZKKnZAyNPQZsTUzQHFDyjlTmXYoBVAasZ7gljM2b55d4H7BuxNcBH2zUpgIFd0dyNijqBxI1p22fghxyQ64EBRJKosNWs0UDiKYSt_eIlEPp_YkVg1syJ0m0QP4P4-xbPwrAnRvJGblwGJ6TR-JyT4EkzW74nDocz_m7JBJ8QDqeLLpKVAXsnC61PcW9PJ6M2un0dKo8-svYxwKJj4ljLveuNIX2y1tFfRgsZT5W42av18hBa_vdBjRUY6LwS1MMrw1ZUwWPnh6QsSODt0NHzXSoa6A054xK0Yzpl83JpTWt06DnkxbYTHhiaix5WE6wakMndr8UVnuYO5rc60jmBiqAqkV32rrTCzLuo6ai0HknltKkLBVOG1QfgEL-fZMitJLH68HowbNtlMCl860RVizw52_atWvw1RuxSVepqcsqiAXH_9g09jBYYoJpjQtdKCksSn2YBB6FfQyMcxYGRGg=w670-h837-no?authuser=0',
    url: 'https://www.instagram.com/p/CXYNRKksiWS/',
    title: 'Browni z kwaśną żurawiną'
}

export const Instagram = ({ posts }: { posts: Posts }) => {

    const postsHTML = posts.map((post: Post) => {
        if (!post.url || !post.image) {
            return <Post post={DEFAULT_POST} />
        }

        return <Post post={post} />
    })

    return <section className={styles.instagram}>
        <div className={styles.header}>
            <Image className={styles.icon} width={40} height={40} src={instagram} alt="instagram icon" />
            <h4>zobacz mój profil na instagramie</h4>
        </div>
        <hr />
        <div className={styles.posts}>
            {postsHTML}
        </div>

    </section>
}

const Post = ({ post }: { post: Post }) => {
    return (
        <a target="_blank" href={post.url} className={styles.post}>
            <img className={styles.image} src={post.image || "#"} />
            <span className={styles.title}>{post.title}</span>
        </a>
    )
}
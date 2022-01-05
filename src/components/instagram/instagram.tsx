import styles from './instagram.module.scss';
import instagram from '../../assets/images/ig_ikona.png';
import Image from 'next/image';

import firstPostImg from '../../assets/instagram/sernik.jpeg';
import secondPostImg from '../../assets/instagram/kanapka.jpeg';

interface Post {
    image: string,
    title: string,
    url: string
}

export type Posts = Post[];

const posts = [
    {
        image: firstPostImg.src,
        title: 'Sernik Nowojorski',
        url: 'https://www.instagram.com/p/CWu1NukMA96/'
    },
    {
        image: secondPostImg.src,
        title: 'Wypasiona Kanapka',
        url: 'https://www.instagram.com/p/CVr3hiks7eQ/'
    }


]

export const Instagram = () => {

    const postsHTML = posts.map((post: Post, index) => {
        return <Post key={index} index={index} post={post} />
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

const Post = ({ post, index }: { post: Post, index: number }) => {
    return (
        <a key={index} target="_blank" href={post.url} className={styles.post}>
            <img className={styles.image} src={post.image || "#"} />
            <span className={styles.title}>{post.title}</span>
        </a>
    )
}
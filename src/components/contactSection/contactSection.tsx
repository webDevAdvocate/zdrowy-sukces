import { Form } from '../form/form';
import { Instagram, Posts } from '../instagram/instagram';
import styles from './contactSection.module.scss';

export const ContactSection = ({posts}: {posts: Posts}) => {
    return <div className={styles['contact-section']}>
        <Instagram posts={posts} />
        <Form />
    </div>
}
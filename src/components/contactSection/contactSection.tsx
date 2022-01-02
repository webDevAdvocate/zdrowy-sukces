import { Form } from '../form/form';
import { Instagram } from '../instagram/instagram';
import styles from './contactSection.module.scss';

export const ContactSection = () => {
    return <div className={styles['contact-section']}>
        <Instagram />
        <Form />
    </div>
}
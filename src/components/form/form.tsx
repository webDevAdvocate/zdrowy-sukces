import styles from './form.module.scss';

export const Form = () => {

    return <section className={styles.section}>
        <div className={styles.content}>
        <h4>Napisz do mnie :)</h4>
        <form className={styles.form}>
            <input className={styles.input} placeholder="Adres e-mail" type="email"></input>
            <input className={styles.input} placeholder="Imię" type="text"></input>
            <textarea className={styles.textarea} placeholder="Treść wiadomości..." rows={4}></textarea>
            <button className={styles.button} type="button">Wyślij</button>
        </form>
        </div>
    </section>
}
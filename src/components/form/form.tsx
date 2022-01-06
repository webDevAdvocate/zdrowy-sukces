import { useState } from 'react';
import cx from 'classnames';
import Link from 'next/link';

import styles from './form.module.scss';

const SUBMIT_FUNCTION_URL =
    "https://us-central1-pyza-lubelskie.cloudfunctions.net/submit";

const sendEmail = async (data: any) => {
    try {
        const res = await fetch(SUBMIT_FUNCTION_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const { isEmailSend, error } = await res.json();
        console.log(isEmailSend, error, res.ok);
        if (!isEmailSend || error || !res.ok) {
            throw new Error(error);
        }

    } catch (err: any) {
        throw new Error(err);
    }
};

const validateName = (name: string) => {
    if (name.length) {
        return false;
    }
    return true;
};

const validateMessage = (message: string) => {
    if (message.length) {
        return false;
    }
    return true;
};

const emailRegexp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateEmail = (email: string) => {
    if (emailRegexp.test(email)) {
        return false;
    }
    return true;
};

const validators = {
    email: validateEmail,
    name: validateName,
    message: validateMessage
}

type FieldType = "email" | "name" | "message";

const successMessage = { firstLine: "Dziękuję za wiadomość!", secondLine: "Zwykle odpowiadam w ciągu 24h." }
const failureMessage = { firstLine: "Przepraszam, coś poszło nie tak :(", secondLine: "Możesz spróbować później lub napisać poprzez instagrama bądź facebooka." }

export const Form = () => {
    const [formValues, setFormValues] = useState<{ name: string, email: string, message: string }>(
        {
            name: "",
            email: "",
            message: "",
        }
    )
    const [privacyConsent, setPrivacyConsent] = useState(false);
    const [validationError, setValidationError] = useState({ email: false, name: false, message: false });
    const [loader, setLoader] = useState(false);
    const [message, setMessage] = useState<{ firstLine: string, secondLine: string } | null>(null);

    const onChange = (key: string, value: any) => {
        setFormValues(prev => ({ ...prev, ...{ [key]: value } }))
    }

    const handleMessage = (message: { firstLine: string, secondLine: string }) => {
        setMessage(message);
        setTimeout(() => setMessage(null), 5000);
    }

    const clearForm = () => {
        setFormValues({
            name: "",
            email: "",
            message: "",
        });
        setPrivacyConsent(false);
    }

    const handleSubmit = () => {
        const error = { ...validationError };

        for (const [field, value] of Object.entries(formValues)) {
            error[field as FieldType] = validators[field as FieldType](value);
        }

        setValidationError(error);

        if (Object.values(error).filter(Boolean).length) {
            return;
        }

        setLoader(true);
        sendEmail({ ...formValues, subject: "Kontak zdrowy-sukces.pl" })
            .then(() => {
                handleMessage(successMessage);
            })
            .catch(() => {
                handleMessage(failureMessage);
            })
            .finally(() => {
                clearForm();
                setLoader(false);
            });
    }

    return <section id="kontakt" className={styles.section}>
        <div className={styles.content}>
            <h4>Napisz do mnie :)</h4>
            {message ? (
                <div className={styles.message}>
                    <div>{message.firstLine}</div>
                    <div>{message.secondLine}</div>
                </div>
            ) : (
                <form className={styles.form}>
                    <input onChange={(evt) => onChange("email", evt.target.value)} className={cx(styles.input, { [styles.invalid]: validationError["email"] })} placeholder="Adres e-mail" type="email"></input>
                    <input onChange={(evt) => onChange("name", evt.target.value)} className={cx(styles.input, { [styles.invalid]: validationError["name"] })} placeholder="Imię" type="text"></input>
                    <textarea onChange={(evt) => onChange("message", evt.target.value)} className={cx(styles.textarea, { [styles.invalid]: validationError["message"] })} placeholder="Treść wiadomości..." rows={4}></textarea>
                    <div className={styles.privacy}>
                        <input type="checkbox" onChange={() => setPrivacyConsent(prev => !prev)} checked={privacyConsent} />
                        <span className={styles.privacy}> Akceptuję <span className={styles.link}><Link href="/polityka-prywatnosci">politykę prywatności</Link></span></span>
                    </div>
                    <button disabled={!privacyConsent} onClick={handleSubmit} className={styles.button} type="button">
                        Wyślij
                        {loader && <div className={styles.spinner}><div></div><div></div><div></div><div></div></div>}
                    </button>
                </form>
            )}
        </div>
    </section>
}
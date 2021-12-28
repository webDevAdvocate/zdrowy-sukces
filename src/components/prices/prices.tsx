import Image from 'next/image';
import styles from './prices.module.scss';

import fork from '../../assets/images/sztuczce.png';

interface Item {
    text: string,
    bullets?: { text: string }[]
}
interface PriceItemModel {
    name: string,
    price: number,
    savings?: number,
    items: Item[]
}

const prices: PriceItemModel[] = [
    {
        name: "Pakiet miesięczny",
        price: 349,
        items: [
            { text: "Wywiad w formie formularza w pliku Word + możliwość dodatkowych pytań mailowo lub telefonicznie" },
            { text: "Jeden indywidualny 14 dniowy jadłospis" },
            { text: "Dwie konsultacje w formie e-mail lub rozmowy tel/wideo" },
            {
                text: "Notatka pdf zawierająca", bullets: [
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Zalecenia indywidualne" },
                    { text: "Zalecenia w danej jednostce chorobowej" },
                    { text: "Omówienie wyników badań" },
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Lista zakupów" }
                ]
            },
            { text: "W ciągu naszej współpracy mamy stały kontakt" },
        ]
    },
    {
        name: "Pakiet trzy miesięczny",
        price: 749,
        savings: 298,
        items: [
            { text: "Wywiad w formie formularza w pliku Word + możliwość dodatkowych pytań mailowo lub telefonicznie" },
            { text: "Trzy indywidualne 14 dniowe jadłospisy" },
            { text: "Sześć konsultacji w formie e-mail lub rozmowy tel/wideo" },
            {
                text: "Notatka pdf zawierająca", bullets: [
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Zalecenia indywidualne" },
                    { text: "Zalecenia w danej jednostce chorobowej" },
                    { text: "Omówienie wyników badań" },
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Lista zakupów" }
                ]
            },
            { text: "W ciągu naszej współpracy mamy stały kontakt" },
        ]
    },
    {
        name: "Pakiet miesięczny",
        price: 349,
        items: [
            { text: "Wywiad w formie formularza w pliku Word + możliwość dodatkowych pytań mailowo lub telefonicznie" },
            { text: "Jeden indywidualny 14 dniowy jadłospis" },
            { text: "Dwie konsultacje w formie e-mail lub rozmowy tel/wideo" },
            {
                text: "Notatka pdf zawierająca", bullets: [
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Zalecenia indywidualne" },
                    { text: "Zalecenia w danej jednostce chorobowej" },
                    { text: "Omówienie wyników badań" },
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Lista zakupów" }
                ]
            },
            { text: "W ciągu naszej współpracy mamy stały kontakt" },
        ]
    },
    {
        name: "Pakiet miesięczny",
        price: 349,
        items: [
            { text: "Wywiad w formie formularza w pliku Word + możliwość dodatkowych pytań mailowo lub telefonicznie" },
            { text: "Jeden indywidualny 14 dniowy jadłospis" },
            { text: "Dwie konsultacje w formie e-mail lub rozmowy tel/wideo" },
            {
                text: "Notatka pdf zawierająca", bullets: [
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Zalecenia indywidualne" },
                    { text: "Zalecenia w danej jednostce chorobowej" },
                    { text: "Omówienie wyników badań" },
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Lista zakupów" }
                ]
            },
            { text: "W ciągu naszej współpracy mamy stały kontakt" },
        ]
    },
    {
        name: "Pakiet miesięczny",
        price: 349,
        items: [
            { text: "Wywiad w formie formularza w pliku Word + możliwość dodatkowych pytań mailowo lub telefonicznie" },
            { text: "Jeden indywidualny 14 dniowy jadłospis" },
            { text: "Dwie konsultacje w formie e-mail lub rozmowy tel/wideo" },
            {
                text: "Notatka pdf zawierająca", bullets: [
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Zalecenia indywidualne" },
                    { text: "Zalecenia w danej jednostce chorobowej" },
                    { text: "Omówienie wyników badań" },
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Lista zakupów" }
                ]
            },
            { text: "W ciągu naszej współpracy mamy stały kontakt" },
        ]
    },
    {
        name: "Pakiet miesięczny",
        price: 349,
        items: [
            { text: "Wywiad w formie formularza w pliku Word + możliwość dodatkowych pytań mailowo lub telefonicznie" },
            { text: "Jeden indywidualny 14 dniowy jadłospis" },
            { text: "Dwie konsultacje w formie e-mail lub rozmowy tel/wideo" },
            {
                text: "Notatka pdf zawierająca", bullets: [
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Zalecenia indywidualne" },
                    { text: "Zalecenia w danej jednostce chorobowej" },
                    { text: "Omówienie wyników badań" },
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Lista zakupów" }
                ]
            },
            { text: "W ciągu naszej współpracy mamy stały kontakt" },
        ]
    }
]

export const Prices = () => {

    const pricesHTML = prices.map(model => <PriceItem model={model} />)

    return <section className={styles.prices}>
        <div className={styles.wrapper}>
            <div className={styles.fork}>
                <Image layout="responsive" src={fork} />
            </div>
            <h1>Cennik</h1>
            <hr />
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
            <div className={styles['prices-box']}>
                {pricesHTML}
            </div>
        </div>
    </section>
}

const PriceItem = ({ model }: { model: PriceItemModel }) => {

    const listHTML = model.items.map(item => {
        if (!item.bullets?.length) {
            return (
                <li className={styles['description-item']}>{item.text}</li>
            )
        }

        const bulletsHTML = item.bullets.map(bullet => {
            return (
                <li className={styles['description-item-bullet']}>{bullet.text}</li>
            )
        })

        return (
            <>
                <li className={styles['description-item']}>{item.text}</li>
                {bulletsHTML}
            </>
        )
    })

    return <div className={styles.box}>
        <div className={styles.title}>{model.name}</div>
        <div className={styles.price}>{model.price} zł</div>
        <ul className={styles.description}>{listHTML}</ul>
    </div>
}
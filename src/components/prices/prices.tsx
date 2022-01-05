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
        name: "Pakiet 1 miesiąc",
        price: 349,
        items: [
            { text: "Wywiad w formie formularza w pliku Word + możliwość dodatkowych pytań mailowo lub telefonicznie" },
            { text: "Jeden indywidualny 14-dniowy jadłospis" },
            { text: "Dwie konsultacje w formie e-mail lub rozmowy tel/wideo" },
            {
                text: "Notatka pdf zawierająca:", bullets: [
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Zalecenia indywidualne" },
                    { text: "Zalecenia w danej jednostce chorobowej" },
                    { text: "Omówienie wyników badań" },
                    { text: "Listę zakupów" }
                ]
            },
            { text: "W ciągu naszej współpracy mamy stały kontakt" },
        ]
    },
    {
        name: "Pakiet 3 miesiące",
        price: 749,
        savings: 298,
        items: [
            { text: "Wywiad w formie formularza w pliku Word + możliwość dodatkowych pytań mailowo lub telefonicznie" },
            { text: "Trzy indywidualne 14-dniowe jadłospisy" },
            { text: "Sześć konsultacji w formie e-mail lub rozmowy tel/wideo" },
            {
                text: "Notatka pdf zawierająca:", bullets: [
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Zalecenia indywidualne" },
                    { text: "Zalecenia w danej jednostce chorobowej" },
                    { text: "Omówienie wyników badań" },
                    { text: "Listę zakupów" }
                ]
            },
            { text: "W ciągu naszej współpracy mamy stały kontakt" },
        ]
    },
    {
        name: "Jednorazowa konsultacja",
        price: 149,
        items: [
            {
                text: "Około 40 minutowa rozmowa obejmująca:", bullets: [
                    { text: "Ustalenie Twojego zapotrzebowania energetycznego" },
                    { text: "Omówienie i analiza aktualnego sposobu odżywiania" },
                    { text: "Lista zaleceń które możesz wdrożyć po konsultacji" },
                    { text: "Omówienie wyników badań" },
                ]
            },
        ]
    },
    {
        name: "Indywidualny 7-dniowy jadłospis",
        price: 119,
        items: [
            { text: "Indywidualny 7-dniowy jadłospis na podstawie wypełnionego kwestionariusza zdrowotno-żywieniowego" },
            {
                text: "Notatka pdf zawierająca:", bullets: [
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Zalecenia indywidualne" },
                    { text: "Zalecenia w danej jednostce chorobowej" },
                    { text: "Omówienie wyników badań" },
                    { text: "Listę zakupów" }
                ]
            },
        ]
    },
    {
        name: "Indywidualny 14-dniowy jadłospis",
        price: 179,
        items: [
            { text: "Indywidualny 14-dniowy jadłospis na podstawie wypełnionego kwestionariusza zdrowotno-żywieniowego" },
            {
                text: "Notatka pdf zawierająca:", bullets: [
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Zalecenia indywidualne" },
                    { text: "Zalecenia w danej jednostce chorobowej" },
                    { text: "Omówienie wyników badań" },
                    { text: "Listę zakupów" }
                ]
            },
        ]
    },
    {
        name: "Indywidualny miesięczny jadłospis",
        price: 239,
        items: [
            { text: "Indywidualny 28-dniowy jadłospis na podstawie wypełnionego kwestionariusza zdrowotno-żywieniowego" },
            {
                text: "Notatka pdf zawierająca:", bullets: [
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Zalecenia indywidualne" },
                    { text: "Zalecenia w danej jednostce chorobowej" },
                    { text: "Omówienie wyników badań" },
                    { text: "Listę zakupów" }
                ]
            },
        ]
    },
]

export const Prices = () => {

    const pricesHTML = prices.map((model, index) => <PriceItem index={index} key={index} model={model} />)

    return <section id="cennik" className={styles.prices}>
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

const PriceItem = ({ model, index }: { model: PriceItemModel, index: number }) => {

    const listHTML = model.items.map((item, i) => {
        if (!item.bullets?.length) {
            return (
                <li key={model.name + i + index + "non-bullet-item"} className={styles['description-item']}>{item.text}</li>
            )
        }

        const bulletsHTML = item.bullets.map((bullet, i) => {
            return (
                <li key={model.name + i + index + "bullet"} className={styles['description-item-bullet']}>{bullet.text}</li>
            )
        })

        return (
            <div key={model.name + i + index + "bullet-item"} >
                <li className={styles['description-item']}>{item.text}</li>
                {bulletsHTML}
            </div>
        )
    })

    return <div key={model.name + index + 'item'} className={styles.box}>
        <div className={styles.title}>{model.name}</div>
        <div className={styles.price}>{model.price} zł</div>
        {model.savings && (<div className={styles.savings}>(oszczędzasz {model.savings} zł)</div>)}
        <hr />
        <ul className={styles.description}>{listHTML}</ul>
    </div>
}
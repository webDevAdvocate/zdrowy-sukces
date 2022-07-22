import Image from "next/image";
import styles from "./prices.module.scss";

import fork from "../../assets/images/sztuczce.png";

interface Item {
    text: string;
    bullets?: { text: string }[];
}
interface PriceItemModel {
    name: string;
    price: number;
    link: string;
    savings?: number;
    items: Item[];
}

const prices: PriceItemModel[] = [
    {
        name: "Pakiet 1 miesiąc",
        price: 399,
        link: 'https://1ct.eu/RJWx',
        items: [
            {
                text:
                    "Wywiad w formie formularza w pliku Word + możliwość dodatkowych pytań mailowo lub telefonicznie",
            },
            { text: "Jeden indywidualny 14-dniowy jadłospis" },
            { text: "Dwie konsultacje w formie e-mail lub rozmowy tel/wideo" },
            {
                text: "Notatka pdf zawierająca:",
                bullets: [
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Zalecenia indywidualne" },
                    { text: "Zalecenia w danej jednostce chorobowej" },
                    { text: "Omówienie wyników badań" },
                    { text: "Listę zakupów" },
                ],
            },
            { text: "W ciągu naszej współpracy mamy stały kontakt" },
        ],
    },
    {
        name: "Pakiet 3 miesiące",
        price: 849,
        link: 'https://1ct.eu/Y3W4',
        savings: 351,
        items: [
            {
                text:
                    "Wywiad w formie formularza w pliku Word + możliwość dodatkowych pytań mailowo lub telefonicznie",
            },
            { text: "Trzy indywidualne 14-dniowe jadłospisy" },
            { text: "Sześć konsultacji w formie e-mail lub rozmowy tel/wideo" },
            {
                text: "Notatka pdf zawierająca:",
                bullets: [
                    { text: "Omówienie dotychczasowego żywienia" },
                    { text: "Zalecenia indywidualne" },
                    { text: "Zalecenia w danej jednostce chorobowej" },
                    { text: "Omówienie wyników badań" },
                    { text: "Listę zakupów" },
                ],
            },
            { text: "W ciągu naszej współpracy mamy stały kontakt" },
        ],
    },
    {
        name: "Jednorazowa konsultacja",
        price: 249,
        link: 'https://1ct.eu/0Y5G',
        items: [
            {
                text: "Rozmowa trwająca około 60 minut, która obejmuje:",
                bullets: [
                    { text: "Analizę żywienia oraz wyników badań" },
                    { text: "Określenie zapotrzebowania energetycznego" },
                    { text: "Holistyczne zalecenia stylu życia" },
                    { text: "Zalecenia żywieniowe w danej jednostce chorobowej" },
                    { text: "Plan suplementacji" },
                    { text: "Podsumowanie konsultacji w pliku pdf" },
                ],
            },
        ],
    },
];

export const Prices = () => {
    const pricesHTML = prices.map((model, index) => (
        <PriceItem index={index} key={index} model={model} />
    ));

    return (
        <section id="cennik" className={styles.prices}>
            <div className={styles.wrapper}>
                <div className={styles.fork}>
                    <Image layout="responsive" src={fork} />
                </div>
                <h1>Cennik</h1>
                <hr />
                <div className={styles.line1}></div>
                <div className={styles["prices-box"]}>{pricesHTML}</div>
            </div>
        </section>
    );
};

const PriceItem = ({
    model,
    index,
}: {
    model: PriceItemModel;
    index: number;
}) => {
    const listHTML = model.items.map((item, i) => {
        if (!item.bullets?.length) {
            return (
                <li
                    key={model.name + i + index + "non-bullet-item"}
                    className={styles["description-item"]}
                >
                    {item.text}
                </li>
            );
        }

        const bulletsHTML = item.bullets.map((bullet, i) => {
            return (
                <li
                    key={model.name + i + index + "bullet"}
                    className={styles["description-item-bullet"]}
                >
                    {bullet.text}
                </li>
            );
        });

        return (
            <div key={model.name + i + index + "bullet-item"}>
                <li className={styles["description-item"]}>{item.text}</li>
                {bulletsHTML}
            </div>
        );
    });

    return (
        <div key={model.name + index + "item"} className={styles.box}>
            <div className={styles.title}>{model.name}</div>
            <div className={styles.price}>{model.price} zł</div>
            {model.savings && (
                <div className={styles.savings}>(oszczędzasz {model.savings} zł)</div>
            )}
            <hr />
            <ul className={styles.description}>{listHTML}</ul>
            <a href={model.link} target="_blank" className={styles.knowMore}>Dowiedz się więcej</a>
        </div>
    );
};

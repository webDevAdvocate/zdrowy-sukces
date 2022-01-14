
import { useState, useCallback, useEffect } from 'react';
import Gallery, { PhotoProps } from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import styles from './effectiveDietLanding.module.scss';

import titleImg from '../../assets/images/effective_diet_title.jpg'

function importAll(r: __WebpackModuleApi.RequireContext) {
    return r.keys().map(r);
}

const mapImages = (imgs: string[]): PhotoProps[] => {
    return imgs.map((img) => {
        return {
            src: img,
            width: 4,
            height: 4.5,
        };
    });
};

const EBOOK_URLS = [
    "https://1ct.eu/lnOr",
    "https://1ct.eu/6mxW",
    "https://1ct.eu/Y94q",
    "https://1ct.eu/WRzr"
]

const PRICE_HTML = [
    <h3 className={styles["no-margin"]}>59,00 - 79.00 zł <span className={styles.promo}>99.00 - 119.00 zł</span></h3>,
    <h3>99.00 - 119.00 zł</h3>
]

const countdown = () => {
    const countDownDate = new Date("Jan 21, 2022 18:00:00").getTime();

    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
        return null;
    }

    return days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

}

export const EffectiveDietLanding = () => {
    const [images, setImages] = useState<string[]>([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [variant, setVariant] = useState(1);
    const [promoTime, setPromoTime] = useState(countdown());
    const [price, setPrice] = useState(promoTime !== null ? PRICE_HTML[0] : PRICE_HTML[1]);

    useEffect(() => {
        const x = setInterval(() => {
            const count = countdown();
            setPromoTime(count);

            setPrice(count !== null ? PRICE_HTML[0] : PRICE_HTML[1]);

        }, 1000);

        return () => clearInterval(x)
    })

    useEffect(() => {
        if (images.length) {
            return;
        }

        const imagesFull = importAll(
            require.context(
                "../../assets/effectiveDiet",
                false,
                /^\.\/.*$/,
                "lazy"
            )
        );

        Promise.all(imagesFull).then((modules) => {
            const srcArr: string[] = modules.map((module: any) => module.default.src)
            setImages([titleImg.src, ...srcArr]);
        });
    }, [images]);

    const openLightbox = useCallback((_, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const openFirstImage = () => {
        setCurrentImage(0);
        setViewerIsOpen(true);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return <section className={styles.section}>
        <div className={styles.content}>
            <div className={styles.gallery}>
                <img
                    className={styles.image}
                    onClick={openFirstImage}
                    src={titleImg.src}
                    alt="skuteczna dieta"
                />
                {images.length && (
                    <Gallery
                        columns={3}
                        direction="column"
                        photos={mapImages(images)}
                        onClick={openLightbox}
                    />
                )}
            </div>
            <div className={styles.info}>
                <h2>E-book Skuteczna Dieta </h2>
                {price}
                {promoTime && <h5>Wyższa cena za: {promoTime}</h5>}
                Przed Tobą 4 wersje ebooka: Ebook 1600 kcal i 1800 kcal z dietą klasyczną, ebook 1600 kcal i
                1800 kcal z dietą przeciwzapalną. Posiłki w każdej wersji możesz wymieniać pomiędzy sobą dowolnie.
                <br />
                <br />
                <strong>Dietę klasyczną wybierz, jeśli:</strong>
                <ul>
                    <li>jesteś zdrowa</li>
                    <li>masz niedoczynność tarczycy lub inne lekkie schorzenie</li>
                    <li>chcesz schudnąć</li>
                    <li>chcesz poprawić swoje nawyki żywieniowe</li>
                    <li>chcesz lepiej się odżywiać</li>
                    <li>ciągle jesteś na diecie i nie widzisz efektów</li>
                </ul>
                <strong>Dietę przeciwzapalną wybierz, jeśli masz:</strong>
                <ul>
                    <li>PCOS</li>
                    <li>Insulinooporność</li>
                    <li>Hiperandrogenizm</li>
                    <li>Hirsutyzm</li>
                    <li>Hiperprolaktynemię</li>
                    <li>Endometriozę</li>
                    <li>Bolesne miesiączki</li>
                    <li>Migreny</li>
                    <li>Choroby o podłożu autoimmunologicznym</li>
                    <li>Trądzik</li>
                </ul>
                <strong>Co znajdziesz w ebooku?</strong>
                <ul>
                    <li>Treść merytoryczną napisaną prostym i zrozumiałym językiem</li>
                    <li>Dokładną kaloryczność potrawy oraz ilość białka, tłuszczów i węglowodanów</li>
                    <li>28 posiłków (7 śniadań, 7 II śniadań, 7 obiadów, 7 kolacji)</li>
                    <li>Posiłki na słodko i na słono</li>
                    <li>28 zdjęć potraw</li>
                    <li>Listę zakupów</li>
                    <li>Listę wymienników</li>
                    <li>Dodatkowe wskazówki przy przepisach</li>
                </ul>
                <div className={styles.buy}>
                    <div className={styles.input}>
                        <input onChange={() => setVariant(1)} type="radio" id="1" name="ebook" value={variant}
                            checked={variant === 1} />
                        <label htmlFor="1">Dieta Klasyczna 1600 kcal</label>
                    </div>
                    <div className={styles.input}>
                        <input onChange={() => setVariant(2)} type="radio" id="2" name="ebook" value={variant}
                            checked={variant === 2} />
                        <label htmlFor="2">Dieta Klasyczna 1800 kcal</label>
                    </div>
                    <div className={styles.input}>
                        <input onChange={() => setVariant(3)} type="radio" id="3" name="ebook" value={variant}
                            checked={variant === 3} />
                        <label htmlFor="3">Dieta Przeciwzapalna 1600 kcal</label>
                    </div>
                    <div className={styles.input}>
                        <input onChange={() => setVariant(4)} type="radio" id="4" name="ebook" value={variant}
                            checked={variant === 4} />
                        <label htmlFor="4">Dieta Przeciwzapalna 1800 kcal</label>
                    </div>
                    <a className={styles.button} href={EBOOK_URLS[variant - 1]} >Kup</a>
                </div>

            </div>
        </div>
        <div className={styles.description}>
            <h3>Co zyskasz kupując ebooka:</h3>
            <ul>
                <li className={styles.descriptionItem}><strong>Oszczędzisz czas</strong> - razem z ebookiem dostaniesz listę zakupów, która będzie pomocna przy
                    planowaniu posiłków. Nie musisz marnować czasu na planowanie posiłków na cały tydzień.
                </li>
                <li className={styles.descriptionItem}><strong>Nie będziesz marnować żywności</strong> – dzięki liście zakupów i posiłkom w ebooku wszystkie lub prawie
                    wszystkie składniki będą wykorzystane. Jeśli coś zostanie, można to będzie zamienić według
                    wymienników lub wskazówek dołączonych do przepisów.
                </li>
                <li className={styles.descriptionItem}><strong>Oszczędzisz pieniądze</strong> – nie będziesz wydawać pieniędzy na produkty, których aktualnie nie
                    potrzebujesz. Masz ściśle określoną listę i kupujesz produkty tylko z tej listy.
                </li>
                <li className={styles.descriptionItem}><strong>Nie dopadnie Cię nuda na talerzu</strong> – przepisy w ebooku są tak skomponowane, żeby dania tam
                    zawarte składały się z różnorodnych produktów np. mięso, strączki, ryby, sery, przetwory.
                </li>
                <li className={styles.descriptionItem}><strong>Schudniesz</strong> – jeśli będziesz stosować dietę i zalecenia z ebooka to gwarantuję Ci, że Twoja masa ciała
                    zmniejszy się, a Ty poczujesz się zadowolona ze swojego ciała. Pamiętaj o dobraniu odpowiedniej
                    kaloryczności.
                </li>
                <li className={styles.descriptionItem}><strong>Poprawisz swoje zdrowie</strong> – dieta w ebooku spełnia zapotrzebowanie na wszystkie witaminy i
                    składniki mineralne. Zawartość białka to 20 %, tłuszczy 35 %, a węglowodanów 45 %. Stosując
                    zbilansowaną dietę poprawisz także kondycję włosów, skóry i paznokci.
                </li>
                <li className={styles.descriptionItem}><strong>Lepiej poczujesz się mając choroby o podłożu hormonalnym</strong> - wersja z dietą przeciwzapalną to must
                    have dla Pań, które mają bolesne miesiączki, hiperprolaktynemię, hiperandrogenizm, PCOS,
                    insulinooporność, endometriozę i inne.
                </li>
            </ul>
            <br />
            <h3>Dokonując wyboru musisz liczyć się z minusami:</h3>
            <ul>
                <li className={styles.descriptionItem}>Dieta nie będzie w 100 % dopasowana do Ciebie. Nie wszystkie posiłki mogą Ci zasmakować, jednak
                    poszczególne produkty możesz wymieniać zgodnie z wymiennikami zawartymi w ebooku.
                </li>
                <li className={styles.descriptionItem}>Ebook z jadłospisem nie sprawdzi się u osób, które cierpią na poważniejsze choroby typu choroby
                    zapalne jelit, choroby wątroby, choroby nerek, alergie i nietolerancje pokarmowe. Jeśli masz np.
                    nietolerancję laktozy to prosto możesz dokonać modyfikacji.
                </li>
            </ul>
        </div>
        <ModalGateway>
            {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                        currentIndex={currentImage}
                        views={images.map((x) => ({
                            source: x,
                        }))}
                    />
                </Modal>
            ) : null}
        </ModalGateway>
    </section>
}





import { useState, useCallback, useEffect } from 'react';
import Gallery, { PhotoProps } from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import styles from './effectiveDietLanding.module.scss';

import titleImg from '../../assets/images/effective_diet_title.png'

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


export const EffectiveDietLanding = () => {
    const [images, setImages] = useState<string[]>([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

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
            setImages(srcArr);
        });
    }, [images]);

    const openLightbox = useCallback((event, { photo, index }) => {
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
                Masz do wyboru 4 wersje ebooka: Ebook 1600 kcal i 1800 kcal z dietą klasyczną, ebook 1600 kcal i
                1800 kcal z dietą przeciwzapalną. Posiłki w każdej wersji możesz wymieniać pomiędzy sobą dowolnie.
                <br />
                <br />
                Dietę klasyczną wybierz, jeśli:
                <ul>
                    <li>jesteś zdrowa</li>
                    <li>masz niedoczynność tarczycy lub inne lekkie schorzenie</li>
                    <li>chcesz schudnąć</li>
                    <li>chcesz poprawić swoje nawyki żywieniowe</li>
                    <li>chcesz lepiej się odżywiać</li>
                    <li>ciągle jesteś na diecie i nie widzisz efektów</li>
                </ul>
                Dietę przeciwzapalną wybierz, jeśli masz:
                <ul>
                    <li>PCOS</li>
                    <li>Insulinooporność</li>
                    <li>Hiperandorgenizm</li>
                    <li>Hirsutyzm</li>
                    <li>Hiperprolaktynemię</li>
                    <li>Endometriozę</li>
                    <li>Bolesne miesiączki</li>
                    <li>Migreny</li>
                    <li>Choroby o podłożu autoimmunologicznym</li>
                    <li>Trądzik</li>
                </ul>
                Co znajdziesz w ebooku?
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
            </div>
        </div>
        <div className={styles.description}>
            Co zyskasz kupując ebooka:
            Oszczędzisz czas - razem z ebookiem dostaniesz listę zakupów, która będzie pomocna przy
            planowaniu posiłków. Nie musisz marnować czasu na planowanie posiłków na cały tydzień.
            Nie będziesz marnować żywności – dzięki liście zakupów i posiłkom w ebooku wszystkie lub prawie
            wszystkie składniki będą wykorzystane. Jeśli coś zostanie, można to będzie zamienić według
            wymienników lub wskazówek dołączonych do przepisów.

            Oszczędzisz pieniądze – nie będziesz wydawać pieniędzy na produkty, których aktualnie nie
            potrzebujesz. Masz ściśle określoną listę i kupujesz produkty tylko z tej listy.
            Nie dopadnie Cię nuda na talerzu – przepisy w ebooku są tak skomponowane, żeby dania tam
            zawarte składały się z różnorodnych produktów np. mięso, strączki, ryby, sery, przetwory.
            Schudniesz – *jeśli będziesz stosować dietę i zalecenia to gwarantuję Ci, że Twoja masa ciała
            zmniejszy się a Ty poczujesz się zadowolona ze swojego ciała. Pamiętaj o dobraniu odpowiedniej
            kaloryczności.
            Poprawisz swoje zdrowie – dieta w ebooku spełnia zapotrzebowanie na wszystkie witaminy i
            składniki mineralne. Zawartość białka to 20 %, tłuszczy 35 %, a węglowodanów 45 %. Stosując
            zbilansowaną dietę poprawisz także kondycję włosów, skóry i paznokci.
            Lepiej poczujesz się mając choroby o podłożu hormonalnym - wersja z dietą przeciwzapalną to must
            have dla Pań, które mają bolesne miesiączki, hiperprolaktynemię, hiperandrogenizm, PCOS,
            insulinooporność, endometrioze i inne.

            Dokonując wyboru musisz liczyć się z minusami:
            - Dieta nie będzie w 100 % dopasowana do Ciebie. Nie wszystkie posiłki mogą Ci zasmakować, jednak
            poszczególne produkty możesz wymieniać zgodnie z wymiennikami zawartymi w ebooku.
            - Ebook z jadłospisem nie sprawdzi się u osób, które cierpią na poważniejsze choroby typu choroby
            zapalne jelit, choroby wątroby, choroby nerek, alergie i *nietolerancje pokarmowe. Jeśli masz np.
            nietolerancję laktozy to prosto możesz dokonać modyfikacji.
        </div>
        <ModalGateway>
            {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                        currentIndex={currentImage}
                        views={[
                            titleImg.src,
                            ...images,
                        ].map((x) => ({
                            source: x,
                        }))}
                    />
                </Modal>
            ) : null}
        </ModalGateway>
    </section>
}




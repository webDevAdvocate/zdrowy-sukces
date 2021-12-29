import React, { useState, useCallback, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import Lightbox from "react-image-lightbox";

import styles from './certificates.module.scss';
import "react-image-lightbox/style.css";

function importAll(r: __WebpackModuleApi.RequireContext) {
    return r.keys().map(r);
}

const clamp = (value: number, clampAt = 30) => {
    if (value > 0) {
        return value > clampAt ? clampAt : value;
    } else {
        return value < -clampAt ? -clampAt : value;
    }
};

export const Certificates = () => {
    const [images, setImages] = useState<string[]>([]);
    const [imagesFHD, setImagesFHD] = useState<string[]>([]);
    const [modalUrl, setModalUrl] = useState<string | null>(null);
    const [openedCertificateIndex, setOpenedCertificateIndex] = useState<number>(0);
    const [style, set] = useSpring(() => ({
        transform: "perspective(500px) rotateY(0deg)",
    }));

    const bind = useScroll((event) => {
        set({
            transform: `perspective(500px) rotateY(${event.scrolling ? clamp(event.delta[0]) : 0
                }deg)`,
        });
    });

    useEffect(() => {
        if (images.length) {
            return;
        }

        const thumbnails = importAll(
            require.context(
                "../../assets/certificates/mini",
                false,
                /^\.\/.*$/,
                "lazy"
            )
        );
        Promise.all(thumbnails).then((modules) => {
            const srcArr: string[] = modules.map((module: any) => module.default.src)
            setImages(srcArr);
        });
    }, [images]);

    useEffect(() => {
        if (imagesFHD.length) {
            return;
        }

        const imagesFull = importAll(
            require.context(
                "../../assets/certificates/fhd",
                false,
                /^\.\/.*$/,
                "lazy"
            )
        );

        Promise.all(imagesFull).then((modules) => {
            const srcArr: string[] = modules.map((module: any) => module.default.src)
            setImagesFHD(srcArr);
        });
    }, [imagesFHD]);

    const handleCertificateClick = useCallback(
        (e) => {
            const src: string = e.target.style.backgroundImage.replace(
                /^url\(['"](.+)['"]\)/,
                "$1"
            );
            const index = images.indexOf(src);
            console.log(imagesFHD[index])
            setModalUrl(imagesFHD[index]);
            setOpenedCertificateIndex(index);
        },
        [images, imagesFHD]
    );

    const closeImagePreview = useCallback(() => {
        setOpenedCertificateIndex(0);
        setModalUrl(null);
    }, []);

    const nextImage = useCallback(() => {
        const index = (openedCertificateIndex + 1) % imagesFHD.length;
        setOpenedCertificateIndex(index);
        setModalUrl(imagesFHD[index]);
    }, [imagesFHD, openedCertificateIndex]);

    const prevImage = useCallback(() => {
        const index =
            (openedCertificateIndex + imagesFHD.length - 1) % imagesFHD.length;
        setOpenedCertificateIndex(index);
        setModalUrl(imagesFHD[index]);
    }, [imagesFHD, openedCertificateIndex]);

    return (
        <section className={styles.certificates}>
            <h1>Certyfikaty</h1>
            <hr />
            <div className={styles.container} {...bind()}>
                {images.map((src) => (
                    <animated.div
                        onClick={handleCertificateClick}
                        key={src}
                        className={styles.card}
                        style={{
                            ...style,
                            backgroundImage: `url(${src})`,
                        }}
                    />
                ))}
            </div>
            {modalUrl && (
                < Lightbox
                    nextSrc={images[(openedCertificateIndex + 1) % images.length]}
                    prevSrc={
                        images[(openedCertificateIndex + images.length - 1) % images.length]
                    }
                    onMovePrevRequest={prevImage}
                    onMoveNextRequest={nextImage}
                    mainSrc={modalUrl}
                    onCloseRequest={closeImagePreview}
                />
            )}
        </section>
    );
};

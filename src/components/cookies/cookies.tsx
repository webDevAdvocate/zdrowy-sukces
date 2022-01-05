import React, { useCallback, useState, useEffect } from "react";
import Link from "next/link";

import classes from "./cookies.module.scss";

export const COOKIES_ACCEPTED_KEY = "cookies";

export const Cookies = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        setShowBanner(!localStorage.getItem(COOKIES_ACCEPTED_KEY));
    }, []);

    const clickHanlder = useCallback(() => {
        localStorage.setItem(COOKIES_ACCEPTED_KEY, "true");
        setShowBanner(false);
    }, []);

    if (!showBanner) {
        return null;
    }

    return (
        <div className={classes.cookies}>
            <h3>Ciasteczka! </h3>
            <div>
                Informujemy, iż w celu optymalizacji treści dostępnych w naszym
                serwisie, dostosowania ich do Państwa indywidualnych potrzeb
                korzystamy z informacji zapisanych za pomocą plików cookies na
                urządzeniach końcowych użytkowników. Pliki cookies użytkownik może
                kontrolować za pomocą ustawień swojej przeglądarki internetowej.
                Dalsze korzystanie z naszego serwisu internetowego, bez zmiany
                ustawień przeglądarki internetowej oznacza, iż użytkownik akceptuje
                stosowanie plików cookies. Czytaj więcej{" "}
                <span className={classes.link}>
                    <Link href="/polityka-prywatnosci">
                        Polityka prywatności
                    </Link>
                </span>
            </div>
            <button onClick={clickHanlder} className={classes.button}>
                Akceptuję
            </button>
        </div>
    );
};
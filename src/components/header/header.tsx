import React, { useRef, useCallback, useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import classNames from "classnames";
import Link from 'next/link';
import { useRouter } from 'next/router'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useScrollPosition } from "react-use-scroll-position";

const INSTAGRAM_URL = "https://www.instagram.com/zdrowy_sukces/";
const FACEBOOK_URL = "https://www.facebook.com/dietetykzdrowysukces";

import classes from "./header.module.scss";
import logo from "../../assets/images/header_logo.png";

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [shouldShrink, setShouldShrink] = useState(false);
  const menuButtonRef = useRef<HTMLInputElement | null>(null);
  const position = useScrollPosition();
  const router = useRouter();

  const headerClasses = classNames(classes.header, {
    [classes.shrink]: shouldShrink, [classes.pink]: router.pathname === '/skuteczna-dieta'
  });

  useEffect(() => {
    const shrink = position.y > 100 || menuOpened;

    if (shrink != shouldShrink) {
      setShouldShrink(prev => !prev);
    }

  }, [position])

  const facebookClasses = classNames(classes.link, classes.facebook);
  const instagramClasses = classNames(classes.link, classes.instagram);

  const onMenuItemClick = useCallback(
    (evt, preventOpening = false) => {
      if (!isMobile) {
        return;
      }

      if (!preventOpening || menuOpened) {
        menuButtonRef.current?.click();
        setMenuOpened(!menuOpened);
      }
    },
    [menuOpened]
  );

  return (
    <header>
      <nav className={headerClasses}>
        <div onClick={(evt) => onMenuItemClick(evt, true)} className={classes.logo}>
          <Link
            href="/#o-mnie"
          >
            <img alt="logo" src={logo.src}></img>
          </Link>
        </div>
        <input
          onClick={() => setMenuOpened(!menuOpened)}
          ref={menuButtonRef}
          className={classes.menuBtn}
          type="checkbox"
          id="menuBtn"
        />
        <label className={classes.menuIcon} htmlFor="menuBtn">
          <span className={classes.navicon}></span>
        </label>
        <ul className={classes.menu}>
          <div className={classes.topControls}>
            <li className={classes.menuItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={FACEBOOK_URL}
                className={facebookClasses}
              >
                <FontAwesomeIcon width={15} height={15} icon={faFacebookF} />
              </a>
            </li>
            <li className={classes.menuItem}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={INSTAGRAM_URL}
                className={instagramClasses}
              >
                <FontAwesomeIcon width={20} height={20} icon={faInstagram} />
              </a>
            </li>
            <li onClick={onMenuItemClick} className={classes.menuItem}>
              <div className={classes.link}>
                <Link href="/#kontakt">
                  Kontakt
                </Link>
              </div>

            </li>
          </div>
          <hr></hr>
          <div className={classes.bottomControls}>
            <li onClick={onMenuItemClick} className={classes.menuItem}>
              <div className={classes.link}>
                <Link href="/#o-mnie">
                  O mnie
                </Link>
              </div>
            </li>
            <li onClick={onMenuItemClick} className={classes.menuItem}>
              <div className={classes.link}>
                <Link href="/#wspolpraca">
                  Współpraca
                </Link>
              </div>
            </li>
            <li onClick={onMenuItemClick} className={classes.menuItem}>
              <div className={classes.link}>
                <Link href="/#cennik">
                  Cennik
                </Link>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

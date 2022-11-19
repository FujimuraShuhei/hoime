import Link from 'next/link';
import React from 'react';
import { ReactBurgerMenu } from 'react-burger-menu';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__logo}>
        <Link href="#">Hoime</Link>
      </h1>
      <nav className={styles.header__menu}>
        <ul className={styles.header__nav}>
          <li>
            <Link href="#">ホーム</Link>
          </li>
          <li>
            <Link href="#">採用サイト制作</Link>
          </li>
          <li>
            <Link href="#">採用マーケティング</Link>
          </li>
          <li>
            <Link href="#">お役立ち資料</Link>
          </li>
          <li>
            <Link href="#">料金</Link>
          </li>
          <li>
            <Link href="#">よくある質問</Link>
          </li>
        </ul>
        <Link className={styles.header__btn} href="#">
          ご相談はこちら
        </Link>
      </nav>
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;

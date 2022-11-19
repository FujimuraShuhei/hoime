import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';

const DrawerMenu = () => {
  return (
    <div className="drawer">
      <input type="checkbox" id="navTgl" className={styles.checkbox__hidden} />
      <label for="navTgl" class={styles.hamburger}>
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div className={styles.drawer__menu}>
        <nav className={styles.drawer__nav}>
          <ul className={styles.drawer__ul}>
            <li>
              <Link href="/">ホーム</Link>
            </li>
            <li>
              <Link href="/website">採用サイト制作</Link>
            </li>
            <li>
              <Link href="/marketing">採用マーケティング</Link>
            </li>
            <li>
              <Link href="/consulting">採用コンサル</Link>
            </li>
            <li>
              <Link href="/shiryo">お役立ち資料</Link>
            </li>
            <li>
              <Link href="/price">料金</Link>
            </li>
            <li>
              <Link href="/faq">よくある質問</Link>
            </li>
            <li>
              <Link className={styles.drawer__contact} href="/contact">
                ご相談はこちら
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DrawerMenu;

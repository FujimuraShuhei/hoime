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
              <Link href="/website">サイト制作</Link>
            </li>
            <li>
              <Link href="/flow">制作の流れについて</Link>
            </li>
            <li>
              <Link href="/blogs">ブログ</Link>
            </li>
            <li>
              <Link href="/">お役立ち資料</Link>
            </li>
            <li>
              <Link href="#">よくある質問</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DrawerMenu;

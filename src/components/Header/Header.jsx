import Link from 'next/link';
import DrawerMenu from './DrawerMenu';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.header__logo}>
          <Link href="/">Shumi</Link>
        </h1>
        <nav className={styles.header__menu}>
          <ul className={styles.header__nav}>
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
              <Link href="#">お役立ち資料</Link>
            </li>
            <li>
              <Link href="#">よくある質問</Link>
            </li>
          </ul>
          <Link className={styles.header__btn} href="#">
            お見積りはこちら
          </Link>
        </nav>
        <DrawerMenu />
      </div>
    </header>
  );
};

export default Header;

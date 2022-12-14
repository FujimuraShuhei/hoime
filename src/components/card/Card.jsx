import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  return (
    <section className={styles.card__box}>
      <h2 className="section__h2" data-en="Service">サービス内容</h2>
      <div className={styles.container}>
        <div className={`${styles.card} ${styles.card01}`}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>01</h2>
              <h3>サイト制作</h3>
              <p className={styles.content__text}>コーポレートサイト、採用特化ページやECサイトなど新規作成やサイトリニューアルにも対応いたします。</p>
            </div>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card02}`}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>02</h2>
              <h3>戦略立案プランニング</h3>
              <p className={styles.content__text}>競合他社にWebブランディングで戦うにはどういうことをしていくのが良いかを調査・分析をして道筋を決めていきます。</p>
            </div>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card03}`}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>03</h2>
              <h3>タイトル</h3>
              <p className={styles.content__text}>テキストテキストテキストテキストテキストテキスト</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button__section}>
        <button className={styles.button__57} role="button">
          <span class="text">サービス内容はこちら</span>
          <span>くわしくみる</span>
        </button>
      </div>
    </section>
  );
};

export default Card;

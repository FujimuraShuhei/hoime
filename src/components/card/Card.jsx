import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  return (
    <section className={styles.card__box}>
      <div className={styles.container}>
        <div className={`${styles.card} ${styles.card01}`}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>01</h2>
              <h3>タイトル</h3>
              <p>テキストテキストテキストテキストテキストテキスト</p>
            </div>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card02}`}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>02</h2>
              <h3>タイトル</h3>
              <p>テキストテキストテキストテキストテキストテキスト</p>
            </div>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card03}`}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>03</h2>
              <h3>タイトル</h3>
              <p>テキストテキストテキストテキストテキストテキスト</p>
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

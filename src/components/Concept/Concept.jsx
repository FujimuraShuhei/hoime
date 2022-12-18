import Image from 'next/image';
import concept from 'src/images/concept.jpg';
import React from 'react';
import styles from './Concept.module.css';

const Concept = () => {
  return (
    <div className={styles.container}>
      <h2 className="section__h2" data-en="About">Shumiについて</h2>
      <div className={styles.inner_container}>
        <div>
          <Image
            src={concept}
            alt="コンセプトの画像"
            width={600}
            height={400}
            layout="responsive"
          />
        </div>
        <div className={styles.textbox}>
          <p className={styles.text}>
            Shumiはサイトブランディングを考え抜いて制作するWebブランディング会社です。
          </p>
          <p className={styles.text}>
            集客ができるサイトリニューアルならShumiにぜひお任せください。
          </p>
          <div className={styles.button__section}>
            <button className={styles.button__57} role="button">
              <span class="text">Shumiについて知る</span>
              <span>くわしくみる</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concept;

import React from 'react';
import styles from './Cta.module.css';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const Cta = () => {
  return (
    <div className={styles.cta__container}>
      <div className={styles.download__box}>
        <FileDownloadOutlinedIcon sx={{ fontSize: 40 }} />
        <h2>Download</h2>
        <p>お役立ち資料</p>
      </div>
      <div className={styles.contact__box}>
        <MailOutlineOutlinedIcon sx={{ fontSize: 40 }} />
        <h2>Contact</h2>
        <p>お問い合わせ</p>
      </div>
    </div>
  );
};

export default Cta;

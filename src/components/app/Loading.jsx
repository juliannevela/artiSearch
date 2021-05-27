import React from 'react';
import style from '../styles/main.css';

function Loading() {
  return (
    <figure aria-label="loading">
      <img alt="loading"  src="music.svg" className={style.loading} />
    </figure>
  );
}

export default Loading;

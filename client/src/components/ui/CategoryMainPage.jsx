import React from 'react';
import style from '../pages/MainPage.module.css';
import { Link } from 'react-router';

export default function Category({ card }) {
  
  return (
    <Link to={`/category/${card.title}`} className={style.cardComponent}>
      <p>{card.title}</p>
    </Link>
  );
}

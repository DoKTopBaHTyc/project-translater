import style from '../pages/MainPage.module.css';
import { Link } from 'react-router';

export default function Category({ card }) {
  return (
    <Link to={`/language/${card.id}/categories`} className={style.cardComponent}>
      <p>{card.name}</p>
    </Link>
  );
}

import { useEffect, useState } from 'react';
import axiosInstance from '../../API/axiosInstance';
import style from './MainPage.module.css';
import Category from '../ui/CategoryMainPage';

export default function MainPage({ user }) {
  const [cards, setCards] = useState([]);
  console.log("🚀 ~ MainPage ~ cards:", cards)

  useEffect(() => {
    axiosInstance
      .get('/lang')
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

  if (user.status === 'logged') {
    return (
      <div className={style.header}>
        <h3>Выбор языка</h3>
        <div className={style.category}>
          {cards.map((card) => (
            <div key={card.id}>
              <Category card={card} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}
      >
        <h1 style={{ fontSize: '2.5rem', color: '#2c3e50', marginBottom: '20px' }}>
          Добро пожаловать на ElbrusLingo!
        </h1>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6',
            color: '#34495e',
          }}
        >
          <p>
            ElbrusLingo — это инновационный тренажер для изучения трех языков:
            английского, испанского и французского. Наша платформа создана для того, чтобы
            сделать процесс изучения языков увлекательным, эффективным и доступным для
            каждого.
          </p>
          <p>
            Мы предлагаем уникальную методику обучения, которая сочетает в себе
            современные технологии и проверенные временем подходы. С ElbrusLingo вы
            сможете:
          </p>
          <ul style={{ textAlign: 'left', margin: '20px 0', paddingLeft: '40px' }}>
            <li>Изучать новые слова.</li>
            <li>
              Практиковать произношение с использованием технологии распознавания речи.
            </li>
            <li>Осваивать грамматику в игровой форме.</li>
            <li>Отслеживать свой прогресс.</li>
          </ul>
          <p>
            Наша цель — помочь вам достичь свободного владения языком, будь то для
            путешествий, работы или личного развития. Присоединяйтесь к ElbrusLingo и
            откройте для себя мир без языковых барьеров!
          </p>
        </div>
      </div>
    );
  }
}

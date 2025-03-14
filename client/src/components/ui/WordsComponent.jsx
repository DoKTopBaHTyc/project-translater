import { useEffect, useState } from 'react';
import axiosInstance from '../../API/axiosInstance';
import { useParams } from 'react-router';

function WordsComponent({ user, deleteHandler, card }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { categoryId } = useParams();
  const [context, setContext] = useState([]);
  useEffect(() => {
    const savedState = localStorage.getItem(`card_${card.id}_flipped`);
    if (savedState === 'true') {
      setIsFlipped(true);
      setIsDisabled(true);
    }
  }, [card.id]);
  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/word/deleate/${card.id}`);
      deleteHandler(card.id);
    } catch (error) {
      console.log(error)
    }
  };

  const contextHandle = () => {
    try {
      axiosInstance.get(`/word/context/${card.id}`)
      .then(({data}) => setContext(data))
      .catch((err) => console.log(err))
      if (response.status === 200) {
        console.log('Данные успешно отправлены:', response.data);
      }
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  }

  const handleClick = async () => {
    if (!isDisabled) {
      setIsFlipped(true);
      setIsDisabled(true);
      localStorage.setItem(`card_${card.id}_flipped`, 'true');

      try {
        const response = await axiosInstance.post('/category/like/add', {
          userId: user.data.id,
          wordId: card.id,
          categoryId: Number(categoryId),
        });
        if (response.status === 200) {
          console.log('Данные успешно отправлены:', response.data);
        }
      } catch (error) {
        console.error('Ошибка при отправке данных:', error);
      }
    }
  };

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      onClick={() => handleClick()}
      style={{
        width: '150px',
        height: '150px',
        perspective: '1000px',
        cursor: isDisabled ? 'default' : 'pointer',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backfaceVisibility: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
          }}
        >
          {card.name}
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backfaceVisibility: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#e0e0e0',
            transform: 'rotateY(180deg)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {card.translation}
            <button
              onClick={(e) => {
                e.stopPropagation();
                speakText(card.translation);
              }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              🔊
            </button>
          </div>
          <div style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'center' }}>
          <button onClick={handleDelete}
            style={{
              background: '#ff4d4d',
              border: 'none',
              borderRadius: '5px',
              padding: '5px 10px',
              cursor: 'pointer',
              fontSize: '14px',
              color: '#fff',
              transition: 'background 0.3s',
            }}
          >
            Удалить
          </button>
          <button onClick={contextHandle}
            style={{
              background: '#4d79ff',
              border: 'none',
              borderRadius: '5px',
              padding: '5px 10px',
              cursor: 'pointer',
              fontSize: '14px',
              color: '#fff',
              transition: 'background 0.3s',
            }}
          >
            Контекст
          </button>
          </div>
        </div>
      </div>
      <div>
      {context[0]}
      </div>
      <div>
        {context[1]}
      </div>
    </div>
  );
}

export default WordsComponent;

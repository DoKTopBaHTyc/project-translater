import { useEffect, useState } from 'react';
import WordsComponent from '../ui/WordsComponent';
import axiosInstance from '../../API/axiosInstance';
import { useParams } from 'react-router';

function WordPage({user}) {
  const [words, setWords] = useState([]);

  const { languageId, categoryId } = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/lang/${languageId}/category/${categoryId}`)
      .then(({ data }) => setWords(data))
      .catch((err) => console.log(err));
  }, [languageId, categoryId]);

  const deleteHandler = (id) => {
    setWords(words.filter((word) => word.id !== id))
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', padding: '20px' }}>
      
      {words.filter((word) => word.id === user.id || 1).map((word) => (
        <WordsComponent user={user} deleteHandler={deleteHandler} key={word.id} card={word}/>
      ))}
    </div>
  );
}

export default WordPage;

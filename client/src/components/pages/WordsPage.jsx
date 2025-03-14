import { useEffect, useState } from 'react';
import WordsComponent from '../ui/WordsComponent';
import axiosInstance from '../../API/axiosInstance';
import { useParams } from 'react-router';

function WordPage() {
  const [words, setWords] = useState([]);

  const { languageId, categoryId } = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/lang/${languageId}/category/${categoryId}`)
      .then(({ data }) => setWords(data))
      .catch((err) => console.log(err));
  }, [languageId, categoryId]);
  console.log(words)
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', padding: '20px' }}>
      {words.map((word) => (
        <WordsComponent languageId={languageId} key={word.name} card={word}/>
      ))}
    </div>
  );
}

export default WordPage;

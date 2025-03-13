import { useState } from "react"
import WordsComponent from "../ui/WordsComponent";

const wordsArray = [
  { id: 1, translate: 'животное', english: 'animal', category: 'животные'  },
  { id: 2, translate: 'стол', english: 'table', category: 'еда' },
  { id: 3, translate: 'яблоко', english: 'apple', category: 'еда' },
  { id: 4, translate: 'машина', english: 'car', category: 'машины' },
  { id: 5, translate: 'книга', english: 'book', category: 'книги' },
  { id: 6, translate: 'дом', english: 'house', category: 'путешествия' },
  { id: 7, translate: 'солнце', english: 'sun', category: 'наука' },
  { id: 8, translate: 'вода', english: 'water', category: 'еда' },
  { id: 9, translate: 'окно', english: 'window', category: 'животные' },
  { id: 10, translate: 'цветок', english: 'flower', category: 'мода' },
  { id: 11, translate: 'ручка', english: 'pen', category: 'фотографии' },
  { id: 12, translate: 'стул', english: 'chair', category: 'путешествия' },
  { id: 13, translate: 'птица', english: 'bird', category: 'животные' },
  { id: 14, translate: 'небо', english: 'sky', category: 'путешествия' },
  { id: 15, translate: 'луна', english: 'moon', category: 'фотография' }
]

function WordPage() {
    const [words, setWords] = useState(wordsArray);
    
  return (
    <div style={{display: "flex", flexWrap: "wrap", gap: "10px", padding: "20px"}}>
        {words.map((word) => (
          <WordsComponent key={word.id} card={word}/>
        ))}
    </div>
  )
}

export default WordPage
import { useEffect, useState } from "react"
import axiosInstance from "../../API/axiosInstance"
import { useParams } from "react-router"

function WordsComponent({ languageId, card }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const {categoryId} = useParams();
  useEffect(() => {
    
    const savedState = localStorage.getItem(`card_${card.id}_flipped`);
    if (savedState === 'true') {
      setIsFlipped(true);
      setIsDisabled(true);
    }
  }, [card.id])

  const handleClick = async () => {
    if(!isDisabled) {
      setIsFlipped(true)
      setIsDisabled(true)
      localStorage.setItem(`card_${card.id}_flipped`, 'true');

      try {
        const response = await axiosInstance.post('/category/like/add', {
          wordId: card.id,
          categoryId: categoryId,
        });
        if (response.status === 200) {
          console.log("Данные успешно отправлены:", response.data);
        } else {
          console.error("")
        }
      } catch (error) {
        console.error('Ошибка при отправке данных:', error)
      }
    }
  }

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);

      utterance.lang = "en-US"
      window.speechSynthesis.speak(utterance)
    
  }

  return (
    <div
      onClick={handleClick}
      style={{
        width: "150px",
        height: "100px",
        perspective: "1000px",
        cursor: isDisabled ? "default" : "pointer",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backfaceVisibility: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f9f9f9",
          }}
        >
          {card.name}
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backfaceVisibility: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#e0e0e0",
            transform: "rotateY(180deg)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {card.translation}
            <button onClick={(e) => {e.stopPropagation(); speakText(card.translation)}} 
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}>
              🔊
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default WordsComponent
import { useEffect, useState } from "react"

function WordsComponent({ languageId, card }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    const savedState = localStorage.getItem(`card_${card.name}_flipped`);
    if (savedState === 'true') {
      setIsFlipped(true);
      setIsDisabled(true);
    }
  }, [card.name])

  const handleClick = () => {
    if(!isDisabled) {
      setIsFlipped(true)
      setIsDisabled(true)
    }
    localStorage.setItem(`card_${card.name}_flipped`, 'true');
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
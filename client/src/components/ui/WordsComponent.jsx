import { useState } from "react"

function WordsComponent({card}) {
  const [isFlipped, setFlipped] = useState(false)
  
  return (
    <div class="card">
      <h2 class="card-body">{card.translate}</h2>
    </div>
  )
}

export default WordsComponent
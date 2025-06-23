import { useEffect, useState } from 'react'
import './AnimatedText.css'

const phrases = [
  "Building digital futures",
  "Creating with purpose",
  "Innovating beyond limits",
  "Nothing Before us"
]

export default function AnimatedText() {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const currentPhrase = phrases[phraseIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
      } else {
        setText(isDeleting 
          ? currentPhrase.substring(0, text.length - 1)
          : currentPhrase.substring(0, text.length + 1))
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex])

  return (
    <h1 className="animated-text">
      We specialize in <span className="gradient-text">{text}</span>
      <span className="cursor">|</span>
    </h1>
  )
}
import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!showBackToTop) {
    return null
  }

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}
import { useState } from 'react'

export default function YesOrNo() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  const yesButtonSize = noCount * 20 + 16

  const handleNoClick = () => {
    setNoCount(noCount + 1)
  }

  const getNoButtonText = () => {
    const phrases = [
      "no",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;("
    ]
    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-red-200 to-pink-300">
    {yesPressed ? (
        <div className="text-center space-y-6 animate-bounce">
        <h1 className="text-6xl font-bold text-red-600">Yayyyy!!! 🎉</h1>
        <img 
            src="https://media.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif" 
            alt="celebration"
            className="w-80 rounded-lg shadow-2xl mx-auto"
        />
        <p className="text-2xl text-gray-700 font-semibold">
            I'm so excited! Get ready for the best Valentine's Day ever! 💕
        </p>
        </div>
    ) : (
        <div className="text-center space-y-8 p-8">
        <h1 className="text-5xl md:text-7xl font-bold text-red-600 mb-4 drop-shadow-lg">
            Will you be my Valentine? 💝
        </h1>
        <img 
            src="https://media.giphy.com/media/Z9cRCMdAMzXi25dwhE/giphy.gif" 
            alt="cute asking"
            className="w-64 h-64 object-cover rounded-full shadow-2xl mx-auto border-8 border-white"
        />
        <div className="flex gap-4 items-center justify-center flex-wrap">
            <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-110 active:scale-95"
            style={{ fontSize: `${yesButtonSize}px` }}
            onClick={() => setYesPressed(true)}
            >
            Yes
            </button>
            <button
            onClick={handleNoClick}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition hover:scale-90"
            >
            {getNoButtonText()}
            </button>
        </div>
        {noCount > 0 && (
            <p className="text-lg text-gray-700 italic animate-pulse">
            The "Yes" button is getting bigger... hint hint 😏
            </p>
        )}
        </div>
    )}
    </div>
  )
}
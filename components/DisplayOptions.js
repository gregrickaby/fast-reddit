import clearFonts from '@/functions/clearFonts'
import cn from 'classnames'
import {useState} from 'react'

export default function DisplayOptions() {
  const [fontFamily, setFontFamily] = useState('font-mono')
  const [fontSelector, toggleFontSelector] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    toggleFontSelector((prev) => !prev)
  }

  function fontSelect(event) {
    event.preventDefault()
    clearFonts()
    setFontFamily(event.target.value)
    document.body.classList.add(event.target.value)
    toggleFontSelector(false)
  }

  return (
    <div
      className={cn('flex items-center fixed top-0 right-0 p-2', {
        'dark:bg-gray-900 bg-white': fontSelector
      })}
    >
      <form onSubmit={handleSubmit}>
        <label htmlFor="display" className="sr-only">
          toggle display options
        </label>
        <button id="display" className="bg-transparent px-2">
          {fontSelector ? 'X' : 'Aa'}
        </button>
      </form>

      {fontSelector && (
        <div className="flex ml-2">
          <select
            id="fontSelect"
            className="p-2 dark:text-gray-900"
            value={fontFamily}
            onChange={fontSelect}
          >
            <option value="font-mono">Monospaced</option>
            <option value="font-sans">Sans Serif</option>
            <option value="font-serif">Serif</option>
          </select>
        </div>
      )}
    </div>
  )
}

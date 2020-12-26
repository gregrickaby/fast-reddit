import {useState} from 'react'
import Results from './Results'

export default function Search() {
  const [inputValue, setValue] = useState('reactjs')
  const [subreddit, setSubreddit] = useState(inputValue)
  const [toggleHelp, setToggleHelp] = useState(false)

  function helpToggler() {
    setToggleHelp((prev) => !prev)
  }

  function handleSearch(event) {
    event.preventDefault()
    setSubreddit(inputValue)
  }

  return (
    <>
      <form className="my-4 text-lg m-auto text-center" onSubmit={handleSearch}>
        <div className="flex">
          <span className="mr-1 self-center">r/</span>
          <input
            autoCapitalize="none"
            className="border w-full p-2"
            id="search"
            minLength="4"
            onChange={(e) => setValue(e.target.value.trim())}
            pattern="^[^~`^<>]+$"
            placeholder="reactjs"
            type="text"
            value={inputValue}
          />
          <button className="border py-2 px-4 ml-1">Search</button>
        </div>
        <label htmlFor="search" className="text-xs italic">
          Type the name of a subreddit and press enter.{' '}
          <button onClick={helpToggler}>
            <span className="sr-only">Help</span>(?)
          </button>
          {toggleHelp && (
            <p>
              You can also combine subreddits. For example:{' '}
              <span className="font-mono not-italic tracking-wide">
                reactjs+vuejs+web_design+wordpress
              </span>
            </p>
          )}
        </label>
      </form>
      <Results subreddit={subreddit} />
    </>
  )
}

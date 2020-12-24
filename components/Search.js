import {useState} from 'react'
import Results from './Results'

export default function Search() {
  const [inputValue, setValue] = useState('reactjs')
  const [subreddit, setSubreddit] = useState(inputValue)

  function handleSubmit(event) {
    event.preventDefault()
    setSubreddit(inputValue)
  }

  return (
    <>
      <form className="my-4 text-lg m-auto text-center" onSubmit={handleSubmit}>
        <label htmlFor="search" className="sr-only">
          type the name of a subreddit and press enter
        </label>
        <div className="flex">
          <span className="mr-1 self-center">r/</span>
          <input
            className="border w-full p-2"
            id="search"
            onChange={(e) => setValue(e.target.value)}
            placeholder="reactjs"
            type="text"
            value={inputValue}
          />
          <button className="border py-2 px-4 ml-1">Search</button>
        </div>
      </form>
      <Results subreddit={subreddit} />
    </>
  )
}

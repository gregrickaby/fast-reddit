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
      <form className="my-8 text-lg" onSubmit={handleSubmit}>
        <span className="mr-1">r/</span>
        <label htmlFor="search" className="sr-only">
          type the name of a subreddit to display posts
        </label>
        <input
          id="search"
          type="text"
          className="border p-2 w-4/6"
          value={inputValue}
          onChange={(e) => setValue(e.target.value)}
        />
        <input className="border py-2 px-4" type="submit" value="View Posts" />
      </form>
      <Results subreddit={subreddit} />
    </>
  )
}

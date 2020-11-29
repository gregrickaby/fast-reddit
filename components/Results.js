import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

export default function Results({subreddit}) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://www.reddit.com/r/${subreddit}/hot/.json?limit=10`
      )
      const json = await res.json()
      setPosts(json.data.children.map((post) => post.data))
    }
    fetchData()
  }, [subreddit, setPosts])

  return (
    <>
      <ul className="list-inside list-decimal">
        {posts.map((post) => (
          <li className="text-lg pb-4 leading-tight" key={post.id}>
            <a
              className="hover:underline"
              href={post.url}
              target="blank"
              dangerouslySetInnerHTML={{__html: post.title}}
            ></a>
          </li>
        ))}
      </ul>
    </>
  )
}

Results.propTypes = {
  subreddit: PropTypes.string
}

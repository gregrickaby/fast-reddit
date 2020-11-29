import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

export default function Results({subreddit}) {
  const [loading, setLoading] = useState(null)
  const [posts, setPosts] = useState([])
  const [lastPost, setLastPost] = useState(null)

  async function fetchData() {
    setLoading(true)

    // Fetch 10 posts.
    const res = await fetch(
      `https://www.reddit.com/r/${subreddit}/hot/.json?limit=10&after=${lastPost}`
    )

    // Convert results to JSON.
    const json = await res.json()

    // Pluck out all the posts.
    const posts = json.data.children.map((post) => post.data)

    // If there are posts...set them in state.
    if (posts.length > 0) {
      setPosts((prevResults) => [...prevResults, ...posts])
    }

    // Keep track of the last post, for load more.
    setLastPost(json.data.after)
    setLoading(false)
  }

  // Load posts
  useEffect(() => {
    fetchData()
  }, []) // eslint-disable-line

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
      <button className="flex border p-2 m-auto" onClick={fetchData}>
        {loading ? <>Loading posts...</> : <>Load More</>}
      </button>
    </>
  )
}

Results.propTypes = {
  subreddit: PropTypes.string
}

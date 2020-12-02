import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {fetchData} from '@/lib/functions'

export default function Results({subreddit}) {
  const [loading, setLoading] = useState(null)
  const [posts, setPosts] = useState([])
  const [lastPost, setLastPost] = useState(null)

  function clearState() {
    setPosts([])
    setLastPost(null)
  }

  async function loadInitialPosts() {
    setLoading(true)
    clearState()
    const data = await fetchData(subreddit)
    setPosts(data.posts)
    setLastPost(data.after)
    setLoading(false)
  }

  async function loadMorePosts() {
    setLoading(true)
    const data = await fetchData(subreddit, lastPost)
    setPosts((prevResults) => [...prevResults, ...data.posts])
    setLastPost(data.after)
    setLoading(false)
  }

  useEffect(() => {
    loadInitialPosts()
  }, [subreddit])

  return (
    <>
      {posts.length > 0 && (
        <ul className="list-inside list-decimal">
          {posts.map((post) => (
            <li className="text-lg pb-4 leading-tight" key={post.id}>
              <a
                href={post.url}
                target="blank"
                dangerouslySetInnerHTML={{__html: post.title}}
              ></a>
            </li>
          ))}
        </ul>
      )}
      <button className="flex border py-2 px-4 m-auto" onClick={loadMorePosts}>
        {loading ? <>Loading Posts...</> : <>Load More</>}
      </button>
    </>
  )
}

Results.propTypes = {
  subreddit: PropTypes.string
}

import {fetchData} from 'functions/fetchData'
import PropTypes from 'prop-types'
import {useEffect, useState} from 'react'
import Skeleton from './Skeleton'

export default function Results({subreddit}) {
  const [loading, setLoading] = useState(null)
  const [loadingMore, setLoadingMore] = useState(null)
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
    setPosts(data?.posts)
    setLastPost(data?.after)
    setLoading(false)
  }

  async function loadMorePosts() {
    setLoadingMore(true)
    const data = await fetchData(subreddit, lastPost)
    setPosts((prevResults) => [...prevResults, ...data?.posts])
    setLastPost(data?.after)
    setLoadingMore(false)
  }

  useEffect(() => {
    loadInitialPosts()
  }, [subreddit])

  if (loading) {
    return <Skeleton />
  }

  return (
    <section>
      {!!posts?.length && (
        <ul className="list-inside list-decimal py-6">
          {posts.map((post) => (
            <li className="text-xl pb-5" key={post?.id}>
              <a
                href={post?.url}
                target="blank"
                dangerouslySetInnerHTML={{__html: post?.title}}
                rel="noreferrer"
              ></a>
            </li>
          ))}
        </ul>
      )}

      <button
        className="animate flex border py-2 px-4 m-auto"
        onClick={loadMorePosts}
      >
        {loadingMore ? <>Loading...</> : <>Load More Posts</>}
      </button>
    </section>
  )
}

Results.propTypes = {
  subreddit: PropTypes.string.isRequired
}

/**
 * Fetch Data from Reddit's API.
 *
 * @param {string} subreddit The name of the subreddit.
 * @param {string} lastPost  The last post in the list.
 */
export async function fetchData(subreddit, lastPost) {
  // Create query string for after.
  const after = lastPost ? `&after=${lastPost}` : ''

  // Attempt to fetch posts.
  const response = await fetch(
    `https://www.reddit.com/r/${subreddit}/hot/.json?limit=10${after}`
  )

  // No response? Bail...
  if (!response.ok) {
    return {
      posts: [],
      after: null
    }
  }

  // Convert response to JSON.
  const json = await response.json()

  // No data in the response? Bail...
  if (!json.data && !json.data.children) {
    return {
      posts: [],
      after: null
    }
  }

  // Finally, return posts.
  return {
    posts: json.data.children.map((post) => post.data),
    after: json.data.after
  }
}

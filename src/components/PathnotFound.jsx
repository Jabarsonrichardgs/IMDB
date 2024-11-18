import React from 'react'

const PathnotFound = () => {
  return (
    <div className="not-found-container">
    <div className="error-code">404</div>
    <h1>Oops! Path Not Found</h1>
    <p>
      We can't find the page you're looking for. It might have been removed,
      renamed, or doesn't exist.
    </p>
    <a href="/" className="back-home">
      Go Back to Home
    </a>
  </div>

  )
}

export default PathnotFound
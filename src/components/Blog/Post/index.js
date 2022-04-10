import React from "react"

import { Link } from 'gatsby'

const BlogPost = ({ slug, title, src, date, keyword }) => {

  return (
    <div className="col-6 col-lg-4 col-xl-3 mb-3">
      <Link to={`/blog/${slug}`} className="blog-post d-flex flex-column">
        <img src={src} alt={slug} className="w-100" />
        <h4>{title}</h4>
        <p className="mt-auto px-1">{keyword} <br/>{date}</p>
      </Link>
    </div >
  )
}

export default BlogPost
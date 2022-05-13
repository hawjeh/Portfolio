import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'

const Sitemap = () => {
  const { pages, site } = useStaticQuery(
    graphql`
      query {
        pages: allSitePage(
          sort: {fields: path}
          filter: {path: {nin: ["/404.html", "/404/", "/dev-404-page/", "/sitemap/", "/auth/", "/sitefinity-certification-v14/", "/search/"]}}
        ) {
          nodes {
            path
          }
        }
        site: allSite {
          nodes {
            siteMetadata {
              siteUrl
            }
          }
        }
      }
    `
  )

  const { nodes } = pages;
  const { siteUrl } = site.nodes[0].siteMetadata;

  const getName = (path) => {
    let name = 'home';
    if (path === '/') {
      name = 'home';
    } else if (path === '/blog/') {
      name = 'blog';
    } else if (path === '/js-to-excel/') {
      name = 'js to excel';
    } else if (path === '/resume/') {
      name = "resume";
    } else if (path === '/search/') {
      name = "search";
    } else {
      name = path.replace("/blog/", "").replaceAll("/", "").replaceAll("-", " ");
    }

    return name;
  }

  const getClassName = (path) => {
    if (path === '/' || path === '/blog/' || path === '/js-to-excel/' || path === '/resume/' || path === '/search/') {
      return '';
    } else {
      return 'ps-3';
    }
  }

  return (
    <section id="sitemap">
      <div className="container">
        <h1 className="text-primary">Sitemap</h1>
        {
          nodes.map((n) => {
            return (
              <Link to={`${siteUrl}${n.path}`} className="nav-link">
                <p className={getClassName(n.path)}>{getName(n.path)}</p>
              </Link>
            )
          })
        }
      </div>
    </section>
  )
}

export default Sitemap
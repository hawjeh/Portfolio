import React from "react"
import Header from "../components/Header"
import Layout from '../components/Layout'

const NotFoundPage = () => {
  return (
    <Layout title="Page Not found">
      <Header showHome={true} />
      <section>
        <div className="container">
          <div className="text-center justify-content-center row">
            <div className="col-12">
              <h3>
                Sorry, the page you looking is <span className="text-primary">not found.</span>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
import React from "react"
import Seo from "../Seo"

const SpAuthShowcase = ({ callback }) => {

  return (
    <section id="showcase">
      <Seo title="SingPass Auth Demo" />
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h3>SingPass Auth Demo</h3>
        <p>Auth Callback Value: </p>
        <pre className="bg-white">
          {callback}
        </pre>
      </div>
    </section>
  )
}

export default SpAuthShowcase
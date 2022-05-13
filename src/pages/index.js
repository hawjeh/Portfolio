import React, { useEffect } from "react"
import Banner from "../components/Banner"
import Header from "../components/Header"
import Layout from '../components/Layout'
import Service from '../components/Service'

const IndexPage = () => {

  useEffect(() => {
    (function () {
      var jsonLd = document.createElement('script');
      jsonLd.type = 'application/ld+json';
      jsonLd.textContent = `{"@context":"https://schema.org","@type":"WebSite","url":"https://www.hawjeh.com/","potentialAction":{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://www.hawjeh.com/search?q={search_term_string}"},"query-input":"required name=search_term_string"}}`;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(jsonLd, s);
    })();
  }, []);

  return (
    <Layout>
      <Banner />
      <Service />
      <Header />
    </Layout>
  )
}

export default IndexPage
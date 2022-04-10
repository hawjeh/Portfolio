import React, { useState, useEffect } from "react"
import Header from "../components/Header"
import Layout from '../components/Layout'
import SpAuth from "../components/Showcase/SpAuth"

const ResumePage = ({ location }) => {

  const [callbackValue, setCallbackValue] = useState('');

  useEffect(() => {
    const search = location.search.substring(1);
    const newVal = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) });
    setCallbackValue(JSON.stringify(newVal, null, 2));
  }, [location]);

  return (
    <Layout title="Blog">
      <Header showHome={true} />
      <SpAuth callback={callbackValue} />
    </Layout>
  )
}

export default ResumePage
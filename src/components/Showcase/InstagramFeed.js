import React, { useEffect, useState } from "react"
import Seo from "../Seo"
import axios from "axios"
import oauth from 'axios-oauth-client'
import { Link } from 'gatsby'

const InstagramFeedShowcase = ({ location }) => {
  const app_id = '1614758308897797';
  const app_secret = '560036878d9ad577e8f39bf7e3965d77';
  const redirect_uri = 'https://localhost:8000/insta-feed'; //'https://www.hawjeh.com/insta-feed';

  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    if (location) {
      const code = location.search.substring(1).replace('code=', '');
      if (code) {
        const getAuthorizationCode = oauth.client(axios.create(), {
          url: 'https://api.instagram.com/oauth/access_token',
          grant_type: 'authorization_code',
          client_id: `${app_id}`,
          client_secret: `${app_secret}`,
          redirect_uri: `${redirect_uri}`,
          code: `${code}`,
        });

        getAuthorizationCode().then(function (response) {
          console.log(response);
          setAccessToken(response.access_token);
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }, [location]);

  return (
    <section id="showcase">
      <Seo title="Instagram Feed POC" />
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h3>Instagram Feed Demo</h3>
        <Link to={`https://api.instagram.com/oauth/authorize?app_id=${app_id}&redirect_uri=${redirect_uri}&scope=user_profile,user_media&response_type=code`} className="btn btn-primary">
          Login IG
        </Link>
      </div>
    </section>
  )
}

export default InstagramFeedShowcase
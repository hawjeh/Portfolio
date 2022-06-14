import { useEffect } from 'react';

const useFbSdkScript = (id) => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: `${id}`,
        xfbml: true,
        version: 'v14.0'
      });
      window.FB.AppEvents.logPageView();
    };
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, [id]);
};

export default useFbSdkScript;
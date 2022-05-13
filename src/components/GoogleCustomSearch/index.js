import React, { useEffect } from "react"

const GoogleCustomSearch = () => {

  useEffect(() => {
    (function () {
      var cx = 'b6d7f03fb246b46c9';
      var gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    })();
  }, []);

  return (
    <div className="container">
      <h1 className="text-primary">Search Result</h1>
      <div className="gcse-search"></div>
    </div>
  )
}

export default GoogleCustomSearch
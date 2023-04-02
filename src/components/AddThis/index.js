import React, { useEffect } from "react"

const AddThis = ({ href, title, center }) => {

  const addThisUrl = '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6278824242b801b4';
  const customClass = center ? 'w-100 d-flex justify-content-center' : 'mt-5';

  useEffect(() => {
    setTimeout(() => {
      var addthisScript = document.createElement('script');
      addthisScript.setAttribute('src', addThisUrl);
      if (document.body) document.body.appendChild(addthisScript)
    });
  }, []);

  return (
    <div className={customClass}>
      <div className="addthis_inline_share_toolbox share" data-url={href} data-title={'Haw Jeh | ' + title}></div>
    </div>
  )
}

export default AddThis
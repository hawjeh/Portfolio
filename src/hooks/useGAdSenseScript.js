import { useEffect } from 'react';

const useGAdSenseScript = (id) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${id}`;
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    const script2 = document.createElement('script');
    script2.innerHTML =
      `
      <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="${id}"
      data-ad-slot="8929561319"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
      <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    `;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
    }
  }, [id]);
};

export default useGAdSenseScript;
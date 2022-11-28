import { useEffect } from 'react';

const useGAdSenseScript = (id) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${id}`;
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    const ins = document.createElement('ins');
    ins.className = "adsbygoogle";
    ins.style.display = 'block';
    ins.attributes['data-ad-client'] = `${id}`;
    ins.attributes['data-ad-slot'] = '8929561319';
    ins.attributes['data-ad-format'] = 'auto';
    ins.attributes['data-full-width-responsive'] = 'true';
    document.body.appendChild(ins);

    const script2 = document.createElement('script');
    script2.innerHTML =
      `
      (adsbygoogle = window.adsbygoogle || []).push({});
    `;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
      document.body.removeChild(ins);
    }
  }, [id]);
};

export default useGAdSenseScript;
import { useEffect } from 'react';

const useShareaholicScript = (id) => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = "preload";
    link.href = "https://cdn.shareaholic.net/assets/pub/shareaholic.js";
    link.as = "script"
    document.head.appendChild(link);

    const meta = document.createElement('meta');
    meta.name = "shareaholic:site_id";
    meta.id = id;
    document.head.appendChild(meta);

    const script = document.createElement('script');
    script.src = `https://cdn.shareaholic.net/assets/pub/shareaholic.js`;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(meta);
      document.body.removeChild(script);
    }
  }, [id]);
};

export default useShareaholicScript;
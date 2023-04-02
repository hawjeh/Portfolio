import { useEffect } from 'react';

const useShareThisScript = (id) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https//platform-api.sharethis.com/js/sharethis.js#property=${id}&product=inline-share-buttons&source=platform`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [id]);
};

export default useShareThisScript;
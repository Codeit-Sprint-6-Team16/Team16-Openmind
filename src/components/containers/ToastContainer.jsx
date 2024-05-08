import { useEffect, useState } from 'react';

import SnsLink from '@ui/SnsLink';
import Toast from '@ui/Toast';

function ToastContainer() {
  const [toast, setToast] = useState(false);

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setToast(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setToast(false), 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [toast]);

  return (
    <>
      <SnsLink onClick={copyUrl} />
      {toast && <Toast>URL이 복사되었습니다.</Toast>}
    </>
  );
}

export default ToastContainer;

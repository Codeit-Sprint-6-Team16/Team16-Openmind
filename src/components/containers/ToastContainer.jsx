import { useState } from 'react';

import SnsLink from '@ui/SnsLink';
import Toast from '@ui/Toast';

function ToastContainer() {
  const [toast, setToast] = useState(false);

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setToast(true);
      setTimeout(() => setToast(false), 5000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SnsLink onClick={copyUrl} />
      {toast && <Toast>URL이 복사되었습니다.</Toast>}
    </>
  );
}

export default ToastContainer;

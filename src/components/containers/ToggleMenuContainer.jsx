import { useCallback, useEffect, useState } from 'react';

import ToggleMenu from '@ui/ToggleMenu';

const ToggleMenuContainer = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    if (isOpen) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <ToggleMenu isOpen={isOpen} onClick={onClick} onToggleMenu={onToggleMenu} />
  );
};

export default ToggleMenuContainer;

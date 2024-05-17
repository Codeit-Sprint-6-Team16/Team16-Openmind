import { useCallback, useEffect, useState } from 'react';
import MeatballMenu from '@ui/MeatballMenu';

const MeatballMenuContainer = ({ onClick, order }) => {
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
    <MeatballMenu
      isOpen={isOpen}
      onToggleMenu={onToggleMenu}
      onClick={onClick}
      order={order}
    />
  );
};

export default MeatballMenuContainer;

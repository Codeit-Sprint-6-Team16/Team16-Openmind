import { useCallback, useEffect, useState } from 'react';

import OrderMenu from '@ui/OrderMenu';

const OrderMenuContainer = ({ onClick, order }) => {
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
    <OrderMenu
      isOpen={isOpen}
      onToggleMenu={onToggleMenu}
      onClick={onClick}
      order={order}
    />
  );
};

export default OrderMenuContainer;

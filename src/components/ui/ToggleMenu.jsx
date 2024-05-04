import { useCallback, useEffect, useState } from 'react';

import arrowUpImg from '../../assets/images/ic_arrow_up.svg';
import meatballImg from '../../assets/images/ic_meatball.svg';
import styles from '../css/ToggleMenu.module.css';

const OPTIONS = {
  NAME: { label: '이름순', value: 'name' },
  NEWEST: { label: '최신순', value: 'newest' },
};

const MEATBALL_OPTIONS = {
  EDIT: { label: '수정하기', value: 'edit' },
  DELETE_ANSWER: { label: '답변 삭제', value: 'deleteAnswer' },
  REJECT_ANSWER: { label: '답변 거절', value: 'rejectAnswer' },
  DELETE_QUESTION: { label: '질문 삭제', value: 'deleteQuestion' },
};

const ToggleMenu = ({ isMeatballMenu, onClick }) => {
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
    <div className={styles.toggleMenu}>
      {isMeatballMenu ? (
        <button className={styles.MeatballButton} onClick={onToggleMenu}>
          <img src={meatballImg} alt="미트볼 메뉴"></img>
        </button>
      ) : (
        <button className={styles.iconButton} onClick={onToggleMenu}>
          <span className={styles.iconText}>이름순</span>
          <img src={arrowUpImg} alt="화살표 이미지"></img>
        </button>
      )}

      {isOpen && (
        <ul className={styles.popup}>
          {isMeatballMenu ? (
            <>
              {Object.values(MEATBALL_OPTIONS).map((option) => (
                <li key={option.value}>
                  <button onClick={() => onClick(option.value)}>
                    {option.label}
                  </button>
                </li>
              ))}
            </>
          ) : (
            <>
              {Object.values(OPTIONS).map((option) => (
                <li key={option.value} className={styles.disabled}>
                  <button onClick={() => onClick(option.value)}>
                    {option.label}
                  </button>
                </li>
              ))}
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default ToggleMenu;

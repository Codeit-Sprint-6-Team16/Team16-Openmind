import { useState } from 'react';

import Button from '@ui/Button';
import QuestionModal from '@ui/QuestionModal';

const QuestionModalContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button variant={'round'} onClick={openModalHandler}>
        질문 작성하기
      </Button>
      {isOpen && <QuestionModal closeModal={closeModalHandler} />}
    </>
  );
};

export default QuestionModalContainer;

import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { postQuestion } from '@services/api/post';
import Button from '@ui/Button';
import QuestionModal from '@ui/QuestionModal';

function QuestionModalContainer({ profile, loadProfile, loadQuestions }) {
  const [content, setContent] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  const sendQuestion = async (value) => {
    try {
      const response = await postQuestion(id, value);
      // alert('질문 추가됨');
      setIsOpen(false);
      loadProfile();
      loadQuestions({
        id: id,
        offset: 0,
        limit: 5,
      });
      setContent('');
    } catch (error) {
      if (error.name === 'TypeError') {
        return console.log(error.name);
      } else if (error.name) {
        console.log(error.status);
      }
    }
  };

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const onSubmitHandler = () => {
    sendQuestion(content);
  };

  return (
    <>
      <Button variant={'round'} size={'large'} onClick={openModalHandler}>
        질문 작성하기
      </Button>
      {isOpen && (
        <QuestionModal
          closeModal={closeModalHandler}
          profile={profile}
          value={content}
          onSubmit={onSubmitHandler}
          onChange={onChangeHandler}
        />
      )}
    </>
  );
}

export default QuestionModalContainer;

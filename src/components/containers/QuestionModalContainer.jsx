import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProfile } from '@services/api/get';
import { postQuestion } from '@services/api/post';
import Button from '@ui/Button';
import QuestionModal from '@ui/QuestionModal';

function QuestionModalContainer() {
  const [profile, setProfile] = useState();
  const [content, setContent] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  const loadProfile = async () => {
    try {
      const response = await getProfile(id);
      setProfile(response);
    } catch (error) {
      if (error.name === 'TypeError') {
        return console.log(error.name);
      } else if (error.name) {
        console.log(error.status);
      }
    }
  };

  const sendQuestion = async (value) => {
    try {
      const response = await postQuestion(profile.id, value);
      alert('질문 추가됨');
    } catch (error) {
      if (error.name === 'TypeError') {
        return console.log(error.name);
      } else if (error.name) {
        console.log(error.status);
      }
    }
  };

  // let { id } = useParams();
  // console.log(id);

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

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <>
      <Button variant={'round'} onClick={openModalHandler}>
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

import { useState } from 'react';

import Button from '@ui/Button';
import QuestionModal from '@ui/QuestionModal';

import { postQuestion } from '@services/api/post';

function QuestionModalContainer(props) {
  const [profile, setProfile] = useState();
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const loadProfile = async () => {
    try {
      const response = await getProfile(window.localStorage.getItem('id'));
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
  
  const openModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    sendQuestion(value);
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <>
      <Button variant={'round'} onClick={openModalHandler}>
        질문 작성하기
      </Button>
      {isOpen && <QuestionModal closeModal={closeModalHandler} profile={profile} value={value} onSubmit={handleSubmit} onClick={handleClick} />}
    </>
  );
}

export default QuestionModalContainer;

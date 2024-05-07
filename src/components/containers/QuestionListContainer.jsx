import React, { useEffect, useState } from 'react';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';

import { getQuestionList } from '@api/get.js';
import { deleteProfile } from '@services/api/delete';

const QuestionListContainer = ({ profile }) => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigate();

  const getQuestions = async () => {
    try {
      const questionsData = await getQuestionList(id);
      setQuestions(questionsData);
    } catch (error) {
      if (error.name === 'TypeError') {
        setErrorMessage('네트워크를 확인하세요');
      } else if (error.name === 'HttpError') {
        setErrorMessage(error.status);
      }
    }
  };
  const deleteAnswerer = async () => {
    try {
      const result = await deleteProfile(id);
      localStorage.removeItem('ID');
      navigation('/');
    } catch (error) {
      if (error.name === 'TypeError') alert(error.message);
      else if (error.name === 'HttpError') alert(error.status);
    }
  };
  const removeIdHandler = () => {
    if (!confirm('ID를 정말로 삭제 하시겠습니까?')) {
    } else {
      deleteAnswerer();
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      {errorMessage} && <div>{errorMessage}</div>
      {questions?.map((element) => (
        <div>sample</div>
      ))}
    </>
  );
};

export default QuestionListContainer;

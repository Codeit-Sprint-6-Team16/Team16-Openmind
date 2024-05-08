import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getQuestionList } from '@api/get.js';
import { deleteProfile } from '@services/api/delete';
import AnswerFeed from '@ui/AnswerFeed';

const AnswerFeedContainer = ({}) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigate();

  const getQuestions = async () => {
    try {
      setIsLoading(true);
      const questionsData = await getQuestionList(id);
      console.log(questionsData);
      setQuestions(questionsData);
    } catch (error) {
      if (error.name === 'TypeError') {
        setErrorMessage('네트워크를 확인하세요');
      } else if (error.name === 'HttpError') {
        setErrorMessage(error.status);
      }
    } finally {
      setIsLoading(false);
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

  return !isLoading ? (
    <>
      {errorMessage && <div>{errorMessage}</div>}

      <AnswerFeed />
    </>
  ) : (
    <div>로딩중</div>
  );
};

export default AnswerFeedContainer;

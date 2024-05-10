import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getProfile, getQuestionList } from '@api/get.js';
import { deleteProfile } from '@services/api/delete';
import AnswerFeed from '@ui/AnswerFeed';

const AnswerFeedContainer = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [questionList, setQuestionList] = useState([]); // questionList로 통일!
  const [profile, setProfile] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigation = useNavigate();

  const getQuestions = async () => {
    try {
      setIsLoading(true);
      const questionsData = await getQuestionList(id);
      setQuestionList(questionsData);
    } catch (error) {
      if (error.name === 'TypeError') {
        setErrorMessage('네트워크를 확인하세요');
      } else if (error.name === 'HttpError') {
        setErrorMessage(error.status);
      }
    } finally {
      setIsLoading(false);
      setButtonClicked(false);
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

  useEffect(() => {
    getQuestions();
    loadProfile();
  }, [buttonClicked]);

  return !isLoading ? (
    <>
      {errorMessage && <div>{errorMessage}</div>}

      <AnswerFeed
        setIsLoading={setIsLoading}
        questionList={questionList}
        profile={profile}
        setButtonClicked={setButtonClicked}
        removeIdHandler={removeIdHandler}
      />
    </>
  ) : (
    <div>로딩중</div>
  );
};

export default AnswerFeedContainer;

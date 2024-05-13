import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { deleteProfile } from '@api/delete';
import { alertError } from '@api/error';
import { getProfile, getQuestionList } from '@api/get.js';
import AnswerFeed from '@ui/AnswerFeed';
import { ButtonClickedContext } from '@utils/ButtonClickedContext';

const AnswerFeedContainer = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [questionList, setQuestionList] = useState([]);
  const [profile, setProfile] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [limit, setLimit] = useState(3);
  const target = useRef();
  const navigation = useNavigate();

  let preventFirst = 0;

  const loadQuestions = async (limit) => {
    try {
      setIsLoading(true);
      const questionsData = await getQuestionList(id, 0, limit);
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

  const loadProfile = async () => {
    try {
      const response = await getProfile(id);
      setProfile(response);
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
      alertError(error);
    }
  };

  const callback = (entry) => {
    if (!isLoading && entry[0].isIntersecting && preventFirst > 0) {
      setLimit((prev) => prev + 3);
    }
    preventFirst++;
  };

  const removeIdHandler = () => {
    if (confirm('ID를 정말로 삭제 하시겠습니까?')) {
      deleteAnswerer();
    } else {
      return;
    }
  };

  useEffect(() => {
    loadQuestions(limit);
    loadProfile();
  }, [buttonClicked]);

  useEffect(() => {
    if (!isLoading) {
      loadQuestions(limit);
    }
  }, [limit]);

  useEffect(() => {
    loadProfile();
    const observer = new IntersectionObserver(callback, { threshold: 0 });
    observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {errorMessage && <div>{errorMessage}</div>}
      <ButtonClickedContext.Provider value={setButtonClicked}>
        <AnswerFeed
          questionList={questionList}
          profile={profile}
          setButtonClicked={setButtonClicked}
          removeIdHandler={removeIdHandler}
        />
      </ButtonClickedContext.Provider>
      <div ref={target}></div>
    </>
  );
};

export default AnswerFeedContainer;

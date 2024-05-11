import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getProfile, getQuestionList } from '@api/get.js';
import { deleteProfile } from '@services/api/delete';
import AnswerFeed from '@ui/AnswerFeed';
import Loading from '@ui/Loading';
import { ButtonClickedContext } from '@utils/ButtonClickedContext';

const options = {
  threshold: 0,
};
const AnswerFeedContainer = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [questionList, setQuestionList] = useState([]); // questionList로 통일!
  const [profile, setProfile] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [limit, setLimit] = useState(3);
  const target = useRef();
  let num = 0;
  const navigation = useNavigate();

  const getQuestions = async (limit) => {
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

  const callback = (entry) => {
    console.log(entry);
    if (!isLoading && entry[0].isIntersecting) {
      setLimit((prev) => prev + 3);
    }
    num++;
  };

  useEffect(() => {
    getQuestions(limit);
    loadProfile();
  }, [buttonClicked]);

  useEffect(() => {
    if (!isLoading) {
      getQuestions(limit);
    }
  }, [limit]);
  useEffect(() => {
    loadProfile();
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target.current);

    return () => {
      observer.disconnect(); // 컴포넌트가 언마운트될 때 관찰자 해제
    };
  }, []);

  return !isLoading ? (
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
      <div ref={target}>target</div>
    </>
  ) : (
    <Loading />
  );
};

export default AnswerFeedContainer;

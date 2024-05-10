import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProfile, getQuestionList } from '@services/api/get.js';
import QuestionFeed from '@ui/QuestionFeed';

function QuestionFeedContainer() {
  const [questionList, setQuestionList] = useState([]);
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const { id } = useParams();
  const target = useRef();
  let num = 0;

  const options = {
    threshold: 1.0,
  };

  const loadQuestions = async ({ id, offset, limit }) => {
    try {
      setIsLoading(true);
      const response = await getQuestionList(id, offset, limit);
      if (offset === 0) {
        setQuestionList(response);
      } else {
        setQuestionList((prevList) => [...prevList, ...response]);
      }
    } catch (error) {
      if (error.name === 'TypeError') {
        return console.log(error.name);
      } else if (error.name) {
        console.log(error.status);
      }
    } finally {
      setIsLoading(false);
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

  const callback = () => {
    console.log('a');
    if (!isLoading && num >= 2) {
      setOffset((prevOffset) => prevOffset + 5);
    }
    num++;
  };

  useEffect(() => {
    loadQuestions({
      id: id,
      offset: offset,
      limit: 5,
    });
  }, [offset]);

  useEffect(() => {
    loadProfile();
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target.current);

    return () => {
      observer.disconnect(); // 컴포넌트가 언마운트될 때 관찰자 해제
    };
  }, []);

  console.log(offset);
  console.log(questionList);

  return (
    <>
      {questionList && profile && (
        <QuestionFeed questionList={questionList} profile={profile} />
      )}
      <div ref={target}>target</div>
    </>
  );
}

export default QuestionFeedContainer;

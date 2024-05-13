import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProfile, getQuestionList } from '@services/api/get.js';
import QuestionFeed from '@ui/QuestionFeed';

function QuestionFeedContainer() {
  const [questionList, setQuestionList] = useState([]);
  const [profile, setProfile] = useState({});
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const target = useRef();

  let preventFirst = 0;

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
      setIsLoading(true);
      const response = await getProfile(id);
      setProfile(response);
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

  const callback = (entry) => {
    if (
      !isLoading &&
      Math.floor(entry[0].intersectionRatio) > 0 &&
      preventFirst > 0
    ) {
      setOffset((prevOffset) => prevOffset + 5);
    }
    preventFirst++;
  };

  useEffect(() => {
    if (!isLoading) {
      loadQuestions({
        id: id,
        offset: offset,
        limit: 5,
      });
    }
  }, [offset]);

  useEffect(() => {
    loadProfile();
    const observer = new IntersectionObserver(callback, { threshold: 1.0 });
    observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {questionList && profile && (
        <QuestionFeed
          questionList={questionList}
          profile={profile}
          loadProfile={loadProfile}
          loadQuestions={loadQuestions}
        />
      )}
      <div ref={target}></div>
    </>
  );
}

export default QuestionFeedContainer;

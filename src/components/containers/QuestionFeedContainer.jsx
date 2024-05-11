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
    if (!isLoading && Math.floor(entry[0].intersectionRatio) > 0 && num > 0) {
      setOffset((prevOffset) => prevOffset + 5);
    }
    num++;
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
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target.current);

    return () => {
      observer.disconnect(); // 컴포넌트가 언마운트될 때 관찰자 해제
    };
  }, []);

  return (
    <>
      {questionList && profile && (
        <QuestionFeed questionList={questionList} profile={profile} />
      )}
      <div ref={target}></div>
    </>
  );
}
//isLoading을 통한 로딩화면 또한 기대했지만,
//렌더링 자체가 없어지면서 스크롤이 최상단으로 이동해버리는 현상 발생
//questionList 전체를 새로 렌더링 하기 때문에 이 전체가 렌더링 되지 않게 되는 것
//이미 있는 데까지는 보여주는 그런 형식의 조건부렌더링이 필요(만약 구현하려면)
export default QuestionFeedContainer;
